import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, FileText, Calendar, LogIn, HelpCircle, Award, Gift, Clock, Edit2, Save, X, Building2, Users, TrendingUp, Send, Heart, MessageCircle, Share2, Plus, Trash2, Cloud, FolderOpen } from "lucide-react";
import heroBackground from "@/assets/3P8A6660.jpg";
import { RegionalExcellence } from "@/app/components/RegionalExcellence";
import { RightSidebar } from "@/app/components/RightSidebar";
import { CheersForPeers } from "@/app/components/CheersForPeers";
import { CompanyConversations } from "@/app/components/CompanyConversations";
import { supabase, isSupabaseConfigured } from "@/app/lib/supabaseClient";

interface CompanyEvent {
  title: string;
  date: Date;
}

interface Activity {
  id: string;
  date: string;
  month: string;
  title: string;
  time: string;
}

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export function HomePage() {
  const defaultActivities: Activity[] = [
    { id: "1", date: "01", month: "FEB", title: "Team meeting - Q1 review", time: "10:00 AM - 11:00 AM" },
    { id: "2", date: "03", month: "FEB", title: "Training session - New systems", time: "2:00 PM - 4:00 PM" },
    { id: "3", date: "05", month: "FEB", title: "Company town hall", time: "9:00 AM - 10:00 AM" }
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAwardsModal, setShowAwardsModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const [siteOrigin, setSiteOrigin] = useState("");
  const [previewDoc, setPreviewDoc] = useState<{
    title: string;
    url: string;
    type: "pdf" | "image" | "office" | "unknown";
  } | null>(null);
  const [isEditingEvent, setIsEditingEvent] = useState(false);
  
  const [isEditingActivities, setIsEditingActivities] = useState(false);
  const [recentActivity, setRecentActivity] = useState<Activity[]>(defaultActivities);
  const [editingActivities, setEditingActivities] = useState<Activity[]>([]);
  
  // Automatically determine next event from activities
  const getNextEvent = (): CompanyEvent | null => {
    if (recentActivity.length === 0) return null;
    
    const sortedActivities = [...recentActivity].sort((a, b) => {
      const dateA = parseActivityDate(a);
      const dateB = parseActivityDate(b);
      return dateA.getTime() - dateB.getTime();
    });
    
    const nextActivity = sortedActivities[0];
    return {
      title: nextActivity.title,
      date: parseActivityDate(nextActivity)
    };
  };
  
  const parseActivityDate = (activity: Activity): Date => {
    const monthMap: { [key: string]: number } = {
      'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
      'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
    };
    
    const year = 2026; // Current year
    const month = monthMap[activity.month.toUpperCase()];
    const day = parseInt(activity.date);
    
    // Parse time from the activity
    const timeParts = activity.time.split(' - ')[0].split(':');
    const hour = parseInt(timeParts[0]);
    const isPM = activity.time.includes('PM');
    const adjustedHour = isPM && hour !== 12 ? hour + 12 : hour;
    
    return new Date(year, month, day, adjustedHour, 0, 0);
  };
  
  const companyEvent = getNextEvent() || {
    title: "No upcoming events",
    date: new Date()
  };
  
  // Get remaining activities (exclude the next event)
  const getRemainingActivities = (): Activity[] => {
    if (recentActivity.length <= 1) return [];
    
    const sortedActivities = [...recentActivity].sort((a, b) => {
      const dateA = parseActivityDate(a);
      const dateB = parseActivityDate(b);
      return dateA.getTime() - dateB.getTime();
    });
    
    // Return all except the first one (which is the next event)
    return sortedActivities.slice(1);
  };
  
  const upcomingActivities = getRemainingActivities();
  
  const [editEventTitle, setEditEventTitle] = useState(companyEvent.title);
  const [editEventDate, setEditEventDate] = useState(companyEvent.date.toISOString().slice(0, 16));
  
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "Sarah Ahmed",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      content: "Excited to announce our new project launch in Dubai! 🚀 Can't wait to see the impact we'll make together.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 15,
      comments: 3,
      isLiked: false
    },
    {
      id: "2",
      author: "Mohammed Al-Rashid",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      content: "Happy birthday to our amazing colleague, Fatima! 🎉 Wishing you all the best!",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      likes: 23,
      comments: 7,
      isLiked: false
    }
  ]);

  // Coffee Counter State
  const [coffeeCount, setCoffeeCount] = useState<number>(() => {
    const saved = localStorage.getItem('tasc-coffee-count');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [coffeeAnimation, setCoffeeAnimation] = useState(false);

  const buildPolicyHref = (segments: string[]) =>
    `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteOrigin(window.location.origin);
    }
  }, []);
  useEffect(() => {
    const loadEvents = async () => {
      if (!isSupabaseConfigured || !supabase) return;
      const { data, error } = await supabase
        .from("events")
        .select("id,date,month,title,time,sort_order")
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Failed to load events", error);
        return;
      }

      if (data && data.length > 0) {
        setRecentActivity(
          data.map((event) => ({
            id: event.id,
            date: event.date,
            month: event.month,
            title: event.title,
            time: event.time,
          }))
        );
      }
    };

    loadEvents();
  }, []);

  const openDocumentPreview = (title: string, segments: string[]) => {
    const relativeUrl = buildPolicyHref(segments);
    const lower = segments[segments.length - 1].toLowerCase();
    const ext = lower.includes(".") ? lower.split(".").pop() || "" : "";
    const absoluteUrl = siteOrigin ? `${siteOrigin}${relativeUrl}` : relativeUrl;

    if (ext === "pdf") {
      setPreviewDoc({
        title,
        url: `${relativeUrl}#toolbar=0&navpanes=0&scrollbar=0`,
        type: "pdf",
      });
      return;
    }

    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) {
      setPreviewDoc({ title, url: relativeUrl, type: "image" });
      return;
    }

    if (["doc", "docx", "docm", "xls", "xlsx", "xlsm", "ppt", "pptx"].includes(ext)) {
      setPreviewDoc({
        title,
        url: `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
          absoluteUrl
        )}`,
        type: "office",
      });
      return;
    }

    setPreviewDoc({ title, url: relativeUrl, type: "unknown" });
  };

  const policyGroups = [
    {
      title: "TASC UAE Policies",
      basePath: ["Policy Updates"],
      items: [
        {
          title: "Corporate Policy - Hiring Remote-Contractual Employees (TASC)",
          file: "1. Corporate Policy - Hiring Remote-Contractual Employees (TASC).docx.pdf",
        },
        {
          title: "Annual Air Ticket Allowance Policy - GCC",
          file: "Annual Air Ticket Allowance Policy  GCC.pdf",
        },
        {
          title: "Corporate Policy - Business Ethics (Including Whistle Blower)",
          file: "Corporate Policy - Business Ethics (Including Whistle Blower).pdf",
        },
        {
          title: "Play To Potential",
          file: "Play To Potential.pdf",
        },
      ],
    },
    {
      title: "TASC IDC Policies",
      basePath: ["Policy Updates", "TASC IDC Policies"],
      items: [
        { title: "Buddy Program @ TASC IDC", file: "Buddy Program @ TASC IDC.pdf" },
        { title: "Dress Code Policy (IDC)", file: "Dress Code Policy_IDC_V1.pdf" },
        { title: "Employee Referral Form", file: "Employee Referral Form.docx" },
        { title: "Employee Referral Program Guidelines", file: "Employee Referral Program_Guidelines.docm" },
        { title: "IDC KSA Holiday Calendar 2026", file: "IDC_KSA-Holiday Calendar_2026.pdf" },
        { title: "IDC UAE Holiday Calendar 2026", file: "IDC_UAE_Holiday Calendar_2026.pdf" },
        { title: "Internet Expense Reimbursement Policy (IDC)", file: "Internet Expense Reimbursement Policy_IDC_V1.pdf" },
        { title: "Leave Policy 2022", file: "Leave Policy_V2022.pdf" },
        { title: "Monthly Staff Meeting Guide", file: "Monthly Staff Meeting Guide.pdf" },
        { title: "Relocation Policy (IDC)", file: "Relocation Policy_IDC_V1.pdf" },
        { title: "Salary Advance & Loan Policy 2023", file: "Salary Advance & Loan Policy 2023.pdf" },
        { title: "Salary Advance & Personal Loan Application Form 2023", file: "Salary Advance and Personal Loan Application Form 2023.doc" },
        { title: "TASC Group Mediclaim Guide 2025-2026", file: "TASC_Group Mediclaim Guide 2025-2026.pdf" },
        { title: "TASC HR Induction (IDC)", file: "TASC_HR Induction_IDC.pdf" },
        { title: "TASC Force @ IDC", file: "TASC_Force@IDC.jpg" },
      ],
      sections: [
        {
          title: "Performance Management",
          basePath: ["Policy Updates", "TASC IDC Policies", "Performance Management"],
          items: [
            { title: "Goals Setting Tips", file: "Goals Setting Tips.pdf" },
            { title: "Goals Template YE 2025", file: "GoalsTemplateYE2025.xlsx" },
            { title: "Play To Potential Launch Message", file: "Here's Launching - Play To Potential!.msg" },
          ],
        },
        {
          title: "SuccessFactors",
          basePath: ["Policy Updates", "TASC IDC Policies", "SuccessFactors"],
          items: [
            { title: "PMGM Employee Navigation Guide", file: "PMGM_Employee Navigation Guide.pdf" },
            { title: "PMGM Manager Navigation Guide", file: "PMGM_Manager Navigation Guide.pdf" },
            { title: "User Navigation Guide - Career Tab", file: "UserNavigationGuide-SF_CareerTab.pdf" },
            { title: "Manager Name Change Guide (Employment Info Tab)", file: "ManagerNameChangeGuideSF_EmploymentInfoTab.pdf" },
          ],
        },
      ],
    },
  ];

  const trainingDocuments = [
    {
      title: "TASC Salesforce Manual",
      file: "TASC Salesforce Manual.pdf",
    },
  ];

  const spotlightDocuments = [
    { title: "October Tales", file: "October Tales.pdf" },
    { title: "November Tales", file: "November Tales.pdf" },
    { title: "December Tales", file: "December Tales.pdf" },
  ];

  const mediaMentions = [
    {
      region: "MENA",
      outlet: "Arabian Diaries",
      title: "UAE Marks 54 Years of Visionary Growth and Resilient Progress",
      link: "https://arabiandiaries.com/uae-marks-54-years-of-visionary-growth-and-resilient-progress/",
      date: "1st December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "MI- Khaleej Times",
      title: "UAE: A nation forged by vision, unity and transformation",
      link: "https://www.khaleejtimes.com/supplements/uae-a-nation-forged-by-vision-unity-and-transformation",
      date: "4th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Fast Company ME",
      title: "As work changes faster than ever, is upskilling becoming the new job security?",
      link: "https://fastcompanyme.com/work-life/as-work-changes-faster-than-ever-is-upskilling-becoming-the-new-job-security/",
      date: "12th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Al Khaleej",
      title: "UAE institutions that meet Emiratization and employment requirements for 2026",
      link: "https://www.alkhaleej.ae/2025-12-12/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA-%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A%D8%A9-%D8%AA%D9%88%D9%81%D8%B1-%D9%85%D8%AA%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D9%88%D8%B7%D9%8A%D9%86-%D9%88%D8%A7%D9%84%D8%AA%D9%88%D8%B8%D9%8A%D9%81-2026-6220156/%D8%A3%D8%B3%D9%88%D8%A7%D9%82-%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF#:~:text=%D8%A8%D8%AF%D8%A3%D8%AA%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%20%D9%88%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%AF%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA,%D8%AA%D8%A7%D8%B3%D9%83)%20%D8%A7%D9%84%D9%85%D8%AA%D8%AE%D8%B5%D8%B5%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AA%D9%88%D8%B8%D9%8A%D9%81.",
      date: "12th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Al Khaleej",
      title: "UAE institutions that meet Emiratization and employment requirements for 2026",
      link: "",
      date: "13th December",
      type: "Print",
    },
    {
      region: "MENA",
      outlet: "The National",
      title: "Want to survive the great AI job cull? Become a nurse, teacher or lawyer",
      link: "https://www.thenationalnews.com/business/money/2025/12/20/jobs-in-uae-ai-safe-teaching-nursing/",
      date: "19th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "The National",
      title: "Human skills remain key, according to AI experts",
      link: "",
      date: "19th December",
      type: "Print",
    },
    {
      region: "MENA",
      outlet: "Blogarama",
      title: "Abu Dhabi targets 120,000 new jobs with talent-first growth strategy",
      link: "https://www.blogarama.com/internet-blogs/1356481-online-news-dubai-uae-gulf-latest-breaking-current-today-brew-blog/71802867-abu-dhabi-targets-120000-new-jobs-talent-first-growth-strategy",
      date: "26th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "The Brew",
      title: "Abu Dhabi targets 120,000 new jobs with talent-first growth strategy",
      link: "https://thebrewnews.com/opinion/abu-dhabi-job-creation/",
      date: "26th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "EnterpriseAM Saudi Newsletter",
      title: "THIS MORNING: Tensions flare on our southern border",
      link: "https://enterpriseam.com/ksa/2025/12/28/tensions-flare-on-our-southern-border/",
      date: "28th December",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Middle East News 24/7",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://menews247.com/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Mid East Info",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://mid-east.info/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Mid East Info - Facebook",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.facebook.com/share/p/1FGgCPbjPt/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Mid East Info - Instagram",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.instagram.com/p/DUSTlPSDLnn/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Gulf Business",
      title: "Unpacking UAE Labor Law 2026",
      link: "",
      date: "3rd February",
      type: "Print",
    },
    {
      region: "MENA",
      outlet: "Arabian Diaries",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://arabiandiaries.com/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "MENA FN",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://menafn.com/1110686605/TASC-Group-Appoints-New-CEO-To-Lead-AI-Driven-Growth-In-The-MENA-Region",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "ZAWYA",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.zawya.com/en/press-release/people-in-the-news/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-lhkd0yw5#:~:text=Dubai%2C%20United%20Arab%20Emirates%20%E2%80%93%20TASC,TASC%20Group%2C%20with%20Founder%20%26%20Current",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Consultancy ME",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.consultancy-me.com/news/12610/tasc-group-founder-mahesh-shahdadpuri-hands-over-ceo-role-to-jayajyoti-sengupta",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Consultancy ME - LinkedIn",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.linkedin.com/posts/consultancy-me-com_tasc-outsourcing-founder-mahesh-shahdadpuri-activity-7424410150117208064-IujJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADY9cRcBAyC7OJYKnCJ_YUQeGNCzuHXW6M4",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "MIT Sloan Management",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.mitsloanme.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "3rd February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "People Matter Middle East",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://me.peoplemattersglobal.com/news/appointments/tasc-names-jayajyoti-sengupta-ceo-as-it-scales-ai-first-managed-services-in-mena-48287",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Quick News Africa",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://quicknews-africa.net/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "The UAE Daily",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://theuaedaily.com/2026/02/04/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "What's Up Ajman",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://whatsupajman.com/news/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Arabian Business Community",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://abc-gcc.net/News/1/392727",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Brandspace Online",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://brandspaceonline.com/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "ZAWYA - Arabic",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.zawya.com/ar/%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D8%A9/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%B3%D8%A4%D9%88%D9%84%D9%8A%D9%86/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-nstxjl7q",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "What's Up Ajman - Arabic",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.whatsupajman.com/amp/news/25340",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Arab Radar",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.arabradar.com/2026/02/04/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Global News Network",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://gnnliberia.com/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "3yon news",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.3yonnews.com/1958307",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "South Africa Today",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://southafricatoday.net/business/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Nas News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://nasnews.ae/%d8%af%d8%a8%d9%8a/%d9%85%d8%ac%d9%85%d9%88%d8%b9%d8%a9-%d8%aa%d8%a7%d8%b3%d9%83-%d8%aa%d8%b9%d9%8a%d9%91%d9%86-%d8%b1%d8%a6%d9%8a%d8%b3%d8%a7%d9%8b-%d8%aa%d9%86%d9%81%d9%8a%d8%b0%d9%8a%d8%a7%d9%8b-%d8%ac%d8%af%d9%8a/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Oyon El Hadath",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.3yonel7ds.com/2026/02/blog-post_4.html",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "UAE Trend News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://uaetrendnews.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Dubai Insight Report",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://dubaiinsightreport.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Abu Dhabi View News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://abudhabiviewnews.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Doha Focus Report",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://dohafocusreport.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Saudi Daily Record",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://saudidailyrecord.net/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Oman Bulletin",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://omanbulletin.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "The Times of UAE",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://thetimesofuae.com/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region/",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Mena FN",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://menafn.com/arabic/1110696390/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%86-%D8%B1%D9%8A%D9%94%D9%8A%D8%B3%D8%A7-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D9%8A%D9%94%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A7%D9%94%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A7%D9%94%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "UAE Trend News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://uaetrendnews.com/article/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Abu Dhabi View News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://abudhabiviewnews.com/article/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "GCC Technology",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://gcctechnology.net/post/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Doha Insight",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://dohainsight.com/article/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Qatar Watch Review",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://qatarwatchreview.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Q8DailyNews",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://q8dailynews.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Kuwait Scope Review",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://kuwaitscopereview.com/post/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Bahrain Biz News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://bahrainbiznews.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Saudi Daily Record",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://saudidailyrecord.net/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Oman Bulletin",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://omanbulletin.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Yemen News Traffic",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://yemennewstraffic.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Amman News Daily",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://ammannewsdaily.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Levant Insider",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://levantinsider.com/post/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Beirut Biz Report",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://beirutbizreport.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Al Sham Info",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://alshaminfo.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Pal Journal",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://paljournal.net/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Egypt CM News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://egyptcmnews.com/article/%D9%85%D8AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D9%83-%D8%AA%D8%B9%D9%8A%D9%91%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A7%D9%8B-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7%D9%8B-%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%86%D9%85%D9%88-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D9%81%D9%8A-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7-%D9%88%D8%B4%D9%85%D8%A7%D9%84-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Zanobya",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.zanobya.net/2026/02/blog-post_4.html",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Sophea",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://www.sophea.org/2026/02/blog-post_64.html",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Doha Insight",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://dohainsight.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Qatar Business Report",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://qatarbusinessreport.com/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "GCC Daily News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://gccdailynews.com/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Bahrain Biz News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://bahrainbiznews.com/article/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Bahrain News Report",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://bahrainnewsreport.com/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Saudiya Business",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://saudiyabusiness.com/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "KSA Financial News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://ksafinancialnews.com/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Muscat Daily News",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://muscatdailynews.net/post/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region-1",
      date: "4th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Arab Icon",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://arabicon.jigsy.com/entries/general/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-the-mena-region",
      date: "5th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "Day of Dubai",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://dayofdubai.com/news/tasc-group-appoints-new-ceo-to-lead-ai-driven-growth-in-mena",
      date: "7th February",
      type: "Online",
    },
    {
      region: "MENA",
      outlet: "AI Watch MENA",
      title: "TASC Group appoints new CEO to lead AI-driven growth in the MENA region",
      link: "https://aiwatchmena.com/intelligence/tasc-names-jayajyoti-sengupta-ceo.html",
      date: "8th February",
      type: "Online",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timezone: string) => {
    return currentTime.toLocaleTimeString('en-US', { 
      timeZone: timezone, 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getTimeOfDay = (timezone: string) => {
    const hour = parseInt(currentTime.toLocaleTimeString('en-US', { 
      timeZone: timezone, 
      hour: '2-digit',
      hour12: false 
    }));
    if (hour >= 5 && hour < 12) return "AM";
    return "PM";
  };

  const getCountdown = () => {
    const now = new Date().getTime();
    const eventTime = companyEvent.date.getTime();
    const diff = eventTime - now;

    if (diff < 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const countdown = getCountdown();

  const handleSaveEvent = () => {
    // Event editing is now disabled since events are automatically pulled from activities
    setIsEditingEvent(false);
  };

  const handleCancelEdit = () => {
    setEditEventTitle(companyEvent.title);
    setEditEventDate(companyEvent.date.toISOString().slice(0, 16));
    setIsEditingEvent(false);
  };

  const handlePostSubmit = () => {
    if (!newPostContent.trim()) return;
    
    const newPost: Post = {
      id: Date.now().toString(),
      author: "You",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      content: newPostContent,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      isLiked: false
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const getRelativeTime = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleSaveActivities = async () => {
    setRecentActivity(editingActivities);
    setIsEditingActivities(false);

    if (!isSupabaseConfigured || !supabase) return;

    const payload = editingActivities.map((activity, index) => ({
      id: activity.id,
      date: activity.date,
      month: activity.month,
      title: activity.title,
      time: activity.time,
      sort_order: index,
    }));

    const { error: deleteError } = await supabase.from("events").delete().neq("id", "");
    if (deleteError) {
      console.error("Failed to clear events", deleteError);
      return;
    }

    if (payload.length > 0) {
      const { error: insertError } = await supabase.from("events").insert(payload);
      if (insertError) {
        console.error("Failed to save events", insertError);
      }
    }
  };

  const handleCancelEditActivities = () => {
    setEditingActivities(recentActivity);
    setIsEditingActivities(false);
  };

  const handleAddActivity = () => {
    const newActivity: Activity = {
      id: Date.now().toString(),
      date: "",
      month: "",
      title: "",
      time: ""
    };
    setEditingActivities([...editingActivities, newActivity]);
  };

  const handleDeleteActivity = (id: string) => {
    setEditingActivities(editingActivities.filter(activity => activity.id !== id));
  };

  const handleActivityChange = (id: string, field: keyof Activity, value: string) => {
    setEditingActivities(editingActivities.map(activity => {
      if (activity.id === id) {
        return {
          ...activity,
          [field]: value
        };
      }
      return activity;
    }));
  };

  const handleCoffeeClick = () => {
    const newCount = coffeeCount + 1;
    setCoffeeCount(newCount);
    localStorage.setItem('tasc-coffee-count', newCount.toString());
    
    // Trigger animation
    setCoffeeAnimation(true);
    setTimeout(() => setCoffeeAnimation(false), 600);
  };

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] px-6 sm:px-10 lg:px-[72px] py-[90px] sm:py-[110px] lg:py-[120px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00bfff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#56db46]/20 rounded-full blur-3xl"></div>
        
        {/* Coffee Counter - Bottom Right */}
        <button
          onClick={handleCoffeeClick}
          className="absolute bottom-[24px] sm:bottom-[32px] lg:bottom-[40px] right-[20px] sm:right-[40px] lg:right-[72px] z-40 group"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] px-[20px] py-[12px] shadow-lg hover:bg-white/15 transition-all hover:scale-105 flex items-center gap-[12px] relative overflow-visible">
            {/* Sizzling Steam Effect */}
            {coffeeAnimation && (
              <>
                <div className="absolute -top-[30px] left-[10px] animate-[steam1_0.8s_ease-out]">
                  <div className="w-[4px] h-[4px] bg-white/60 rounded-full blur-[1px]"></div>
                </div>
                <div className="absolute -top-[35px] left-[15px] animate-[steam2_1s_ease-out_0.1s]">
                  <div className="w-[3px] h-[3px] bg-white/50 rounded-full blur-[1px]"></div>
                </div>
                <div className="absolute -top-[28px] left-[20px] animate-[steam3_0.9s_ease-out_0.2s]">
                  <div className="w-[3px] h-[3px] bg-white/40 rounded-full blur-[1px]"></div>
                </div>
                <div className="absolute -top-[32px] left-[12px] animate-[steam1_0.85s_ease-out_0.15s]">
                  <div className="w-[2px] h-[2px] bg-white/50 rounded-full blur-[1px]"></div>
                </div>
                <div className="absolute -top-[40px] left-[18px] animate-[steam2_1.1s_ease-out_0.25s]">
                  <div className="w-[3px] h-[3px] bg-white/45 rounded-full blur-[1px]"></div>
                </div>
              </>
            )}
            
            <span className={`text-[28px] transition-all ${coffeeAnimation ? 'animate-[sizzle_0.6s_ease-in-out]' : ''}`}>☕</span>
            <div className="text-left">
              <div className="text-white/70 text-[10px] font-['Gotham'] uppercase tracking-wide">Team Fuel</div>
              <div className="text-white text-[18px] font-['Poppins'] font-bold leading-tight">{coffeeCount.toLocaleString()}</div>
            </div>
          </div>
        </button>
        
        <div className="max-w-[1000px] mx-auto relative z-30 text-center w-full">
          <h1 className="text-[56px] font-['Poppins'] font-bold text-white leading-[1.2] mb-[24px]">
            Welcome to the TASC Intranet
          </h1>
          <p className="text-[20px] font-['Gotham'] text-white/90 leading-[1.6] max-w-[750px] mx-auto mb-[40px] sm:mb-[48px]">
            Your central resource for company information, strategic updates, and internal communications.
          </p>
          
          <div className="flex gap-[16px] justify-center flex-wrap">
            <Link
              to="/whats-happening"
              className="bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[32px] py-[16px] text-white text-[16px] font-['Poppins'] font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-[10px]"
            >
              <Calendar className="w-[20px] h-[20px]" />
              This Month's Activity
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content - Centered and Symmetrical */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[40px] py-[32px] sm:py-[40px]">
        {/* Two Column Layout - Main Content + Right Sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-[28px] xl:gap-[32px]">
          {/* LEFT COLUMN - Main Content */}
          <div>
        {/* Featured Videos */}
        <div className="mb-[32px]">
          <div className="flex items-center justify-between mb-[16px]">
            <div>
              <h2 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] leading-tight">
                Featured Videos
              </h2>
              <p className="text-[14px] font-['Gotham'] text-gray-500">
                Quick highlights and team stories
              </p>
            </div>
            <span className="text-[12px] font-['Gotham'] text-gray-400 uppercase tracking-wide">
              Coming soon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {["Company Update", "Team Spotlight", "Culture Moment"].map((title) => (
              <div
                key={title}
                className="group rounded-[16px] border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[#e8f6ff] via-[#f2fbff] to-[#eefbf1]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,191,255,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(86,219,70,0.18),transparent_55%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[58px] h-[58px] rounded-full bg-white/90 border border-white/60 shadow-md flex items-center justify-center text-[#005f83] text-[20px] group-hover:scale-105 transition-transform">
                      ▶
                    </div>
                  </div>
                  <div className="absolute bottom-[10px] right-[10px] rounded-[999px] bg-white/80 px-[10px] py-[4px] text-[11px] font-['Gotham'] text-gray-600 shadow-sm">
                    Placeholder
                  </div>
                </div>
                <div className="p-[16px]">
                  <div className="text-[15px] font-['Poppins'] font-semibold text-gray-900 mb-[6px]">
                    {title}
                  </div>
                  <div className="text-[12px] font-['Gotham'] text-gray-500 leading-[18px]">
                    Add video asset later
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cheers For Peers - Peer Recognition System */}
        <CheersForPeers />

        {/* Two Column Section - Event, Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[40px]">
          {/* Event Countdown */}
          <div className="bg-gradient-to-br from-[#ffe102] to-[#e6ca02] rounded-[16px] p-[24px] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-[16px]">
                <div className="flex items-center gap-[8px]">
                  <span className="text-[24px]">🎪</span>
                  <h3 className="text-[16px] font-['Poppins'] font-bold text-[#005f83]">Next Event</h3>
                </div>
                {!isEditingEvent && (
                  <button onClick={() => setIsEditingEvent(true)} className="text-[#005f83]/60 hover:text-[#005f83] transition-colors">
                    <Edit2 className="w-[16px] h-[16px]" />
                  </button>
                )}
              </div>
              
              {isEditingEvent ? (
                <div className="space-y-[12px]">
                  <input
                    type="text"
                    value={editEventTitle}
                    onChange={(e) => setEditEventTitle(e.target.value)}
                    className="w-full bg-white/30 border border-[#005f83]/30 rounded-[8px] px-[12px] py-[8px] text-[#005f83] text-[16px] font-['Poppins'] font-bold placeholder-[#005f83]/50 focus:outline-none focus:border-[#005f83]/50"
                    placeholder="Event title"
                  />
                  <input
                    type="datetime-local"
                    value={editEventDate}
                    onChange={(e) => setEditEventDate(e.target.value)}
                    className="w-full bg-white/30 border border-[#005f83]/30 rounded-[8px] px-[12px] py-[8px] text-[#005f83] text-[14px] font-['Gotham'] focus:outline-none focus:border-[#005f83]/50"
                  />
                  <div className="flex gap-[8px]">
                    <button onClick={handleSaveEvent} className="flex-1 bg-[#56db46] hover:bg-[#4bc93d] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-['Poppins'] font-semibold transition-colors flex items-center justify-center gap-[6px]">
                      <Save className="w-[14px] h-[14px]" />Save
                    </button>
                    <button onClick={handleCancelEdit} className="flex-1 bg-[#005f83] hover:bg-[#004a68] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-['Poppins'] font-semibold transition-colors flex items-center justify-center gap-[6px]">
                      <X className="w-[14px] h-[14px]" />Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-[20px]">
                    <h4 className="text-[#005f83] text-[17px] font-['Poppins'] font-bold leading-tight">{companyEvent.title}</h4>
                    <p className="text-[#005f83]/70 text-[12px] font-['Gotham'] mt-[4px]">{companyEvent.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-sm rounded-[12px] p-[20px] border border-white/40">
                    <div className="flex items-center justify-between gap-[8px]">
                      <div className="text-center flex-1">
                        <div className="text-[#005f83] text-[32px] font-['Poppins'] font-bold leading-none mb-[4px]">{countdown.days.toString().padStart(2, '0')}</div>
                        <div className="text-[#005f83]/70 text-[11px] font-['Gotham'] font-semibold uppercase tracking-wide">Days</div>
                      </div>
                      <div className="text-[#005f83]/30 text-[28px] font-bold leading-none pb-[12px]">:</div>
                      <div className="text-center flex-1">
                        <div className="text-[#005f83] text-[32px] font-['Poppins'] font-bold leading-none mb-[4px]">{countdown.hours.toString().padStart(2, '0')}</div>
                        <div className="text-[#005f83]/70 text-[11px] font-['Gotham'] font-semibold uppercase tracking-wide">Hours</div>
                      </div>
                      <div className="text-[#005f83]/30 text-[28px] font-bold leading-none pb-[12px]">:</div>
                      <div className="text-center flex-1">
                        <div className="text-[#005f83] text-[32px] font-['Poppins'] font-bold leading-none mb-[4px]">{countdown.minutes.toString().padStart(2, '0')}</div>
                        <div className="text-[#005f83]/70 text-[11px] font-['Gotham'] font-semibold uppercase tracking-wide">Mins</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-sm border-2 border-gray-100">
            <div className="flex items-center justify-between mb-[20px]">
              <div className="flex items-center gap-[8px]">
                <span className="text-[20px]">📅</span>
                <h3 className="text-[16px] font-['Poppins'] font-bold text-[#005f83]">Coming Up</h3>
              </div>
              <div className="flex items-center gap-[8px]">
                {!isEditingActivities && (
                  <>
                    <button 
                      onClick={() => {
                        setEditingActivities(recentActivity);
                        setIsEditingActivities(true);
                      }} 
                      className="text-[#005f83]/60 hover:text-[#005f83] transition-colors"
                    >
                      <Edit2 className="w-[16px] h-[16px]" />
                    </button>
                    <Link to="/whats-happening" className="text-[13px] font-['Poppins'] text-[#00bfff] hover:underline">See all</Link>
                  </>
                )}
              </div>
            </div>
            
            {isEditingActivities ? (
              <div className="space-y-[12px]">
                {editingActivities.map((activity, index) => (
                  <div key={activity.id} className="bg-gray-50 rounded-[12px] p-[12px] border border-gray-200">
                    <div className="flex gap-[12px] mb-[10px]">
                      <div className="flex gap-[8px] flex-1">
                        <input
                          type="text"
                          value={activity.date}
                          onChange={(e) => handleActivityChange(activity.id, 'date', e.target.value)}
                          className="w-[40px] bg-white border border-gray-300 rounded-[6px] px-[8px] py-[6px] text-[14px] font-['Poppins'] font-bold text-center focus:outline-none focus:border-[#00bfff]"
                          placeholder="DD"
                          maxLength={2}
                        />
                        <input
                          type="text"
                          value={activity.month}
                          onChange={(e) => handleActivityChange(activity.id, 'month', e.target.value.toUpperCase())}
                          className="w-[50px] bg-white border border-gray-300 rounded-[6px] px-[8px] py-[6px] text-[12px] font-['Gotham'] font-bold text-center uppercase focus:outline-none focus:border-[#00bfff]"
                          placeholder="MON"
                          maxLength={3}
                        />
                      </div>
                      <button
                        onClick={() => handleDeleteActivity(activity.id)}
                        className="text-red-500 hover:text-red-700 transition-colors shrink-0"
                      >
                        <Trash2 className="w-[16px] h-[16px]" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={activity.title}
                      onChange={(e) => handleActivityChange(activity.id, 'title', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-[6px] px-[10px] py-[6px] text-[14px] font-['Poppins'] font-semibold mb-[8px] focus:outline-none focus:border-[#00bfff]"
                      placeholder="Event title"
                    />
                    <input
                      type="text"
                      value={activity.time}
                      onChange={(e) => handleActivityChange(activity.id, 'time', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-[6px] px-[10px] py-[6px] text-[12px] font-['Gotham'] focus:outline-none focus:border-[#00bfff]"
                      placeholder="e.g., 10:00 AM - 11:00 AM"
                    />
                  </div>
                ))}
                
                <button
                  onClick={handleAddActivity}
                  className="w-full bg-gray-100 hover:bg-gray-200 border-2 border-dashed border-gray-300 rounded-[12px] p-[12px] text-[#005f83] text-[14px] font-['Poppins'] font-semibold transition-colors flex items-center justify-center gap-[8px]"
                >
                  <Plus className="w-[16px] h-[16px]" />
                  Add Activity
                </button>
                
                <div className="flex gap-[8px] pt-[8px]">
                  <button 
                    onClick={handleSaveActivities} 
                    className="flex-1 bg-[#56db46] hover:bg-[#4bc93d] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-['Poppins'] font-semibold transition-colors flex items-center justify-center gap-[6px]"
                  >
                    <Save className="w-[14px] h-[14px]" />Save
                  </button>
                  <button 
                    onClick={handleCancelEditActivities} 
                    className="flex-1 bg-[#005f83] hover:bg-[#004a68] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-['Poppins'] font-semibold transition-colors flex items-center justify-center gap-[6px]"
                  >
                    <X className="w-[14px] h-[14px]" />Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-[14px]">
                {upcomingActivities.length > 0 ? (
                  upcomingActivities.map((activity, index) => (
                    <div key={index} className="flex gap-[16px] p-[12px] bg-gray-50 rounded-[12px] hover:bg-[#00bfff]/5 transition-all cursor-pointer border border-transparent hover:border-[#00bfff]/30">
                      <div className="text-center shrink-0">
                        <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[12px] flex flex-col items-center justify-center">
                          <div className="text-[18px] font-['Poppins'] font-bold text-white leading-none">{activity.date}</div>
                          <div className="text-[9px] font-['Gotham'] text-white/90 uppercase font-bold">{activity.month}</div>
                        </div>
                      </div>
                      <div className="flex-1 pt-[2px]">
                        <h4 className="text-[14px] font-['Poppins'] font-semibold text-gray-800 mb-[4px]">{activity.title}</h4>
                        <p className="text-[12px] font-['Gotham'] text-gray-500 flex items-center gap-[4px]">
                          <Clock className="w-[12px] h-[12px]" />{activity.time}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-[40px] text-gray-400">
                    <Calendar className="w-[48px] h-[48px] mx-auto mb-[12px] opacity-30" />
                    <p className="text-[14px] font-['Poppins']">No more upcoming events</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Regional Excellence */}
        <RegionalExcellence />

        {/* TASC Wall - Full Width */}
        <div className="mb-[40px]">
          <CompanyConversations />
        </div>

        {/* Quick Links - Full Width */}
        <div className="mb-[40px]">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="h-[3px] w-[40px] bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-full"></div>
            <h2 className="text-[22px] font-['Poppins'] font-bold text-[#005f83]">Quick Links</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[20px]">
            <a href="https://hcm22.sapsf.com/sf/home?bplte_company=tasclabour#/login" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#005f83]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#005f83] to-[#004a68] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <LogIn className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">SAP Login</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">SuccessFactors</span>
            </a>
            <a href="mailto:k.arun@tascoutsourcing.com,akhil@tascoutsourcing.com?subject=IT%20Support%20Request" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#00bfff]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#00bfff] to-[#0099cc] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <HelpCircle className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">IT Support</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">Get help</span>
            </a>
            <a href="https://hcm22.sapsf.com/sf/home?bplte_company=tasclabour#/login" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#56db46]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#56db46] to-[#3db82f] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <Award className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">My Results</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">Performance</span>
            </a>
            <a href="https://hcm22.sapsf.com/sf/home?bplte_company=tasclabour#/login" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#ffe102]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#ffe102] to-[#e6ca02] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <Gift className="w-[28px] h-[28px] text-[#005f83]" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">My Rewards</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">Perks & benefits</span>
            </a>
            <a href="https://login.salesforce.com/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#00bfff]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#00bfff] to-[#0077aa] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <Cloud className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">Salesforce</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">CRM login</span>
            </a>
            <a href="https://tascoutsourcing.sharepoint.com/:f:/s/MarketingCollateralsforSalesAM/IgArCL7by6jxRqnC-THFAM50AUwEQrkpaLpkFbe9NnJCC0g?e=PQ3Mzk" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#005f83]/20">
              <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#005f83] to-[#0077aa] flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform">
                <FolderOpen className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-['Poppins'] font-semibold text-gray-800 block mb-[4px]">Sales Collaterals</span>
              <span className="text-[11px] font-['Gotham'] text-gray-500">SharePoint folder</span>
            </a>
          </div>
        </div>

        {/* Explore TASC - Full Width */}
        <div className="mb-[40px]">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="h-[3px] w-[40px] bg-gradient-to-r from-[#ffe102] to-[#56db46] rounded-full"></div>
            <h2 className="text-[22px] font-['Poppins'] font-bold text-[#005f83]">Explore TASC</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] justify-items-center max-w-[900px] mx-auto">
            {/* Policy Updates */}
            <button
              type="button"
              onClick={() => setShowPolicyModal(true)}
              className="group relative h-[200px] rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 text-left w-full"
            >
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Policy Updates" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005f83]/90 to-transparent"></div>
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <div className="inline-block bg-[#00bfff] text-white text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full mb-[8px]">POLICIES</div>
                <h3 className="text-white text-[20px] font-['Poppins'] font-bold">Policy Updates</h3>
              </div>
            </button>

            {/* Training */}
            <button
              type="button"
              onClick={() => setShowTrainingModal(true)}
              className="group relative h-[200px] rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 text-left w-full"
            >
              <img src="https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffe102]/90 to-transparent"></div>
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <div className="inline-block bg-white text-[#005f83] text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full mb-[8px]">LEARNING</div>
                <h3 className="text-[#005f83] text-[20px] font-['Poppins'] font-bold">Training</h3>
              </div>
            </button>

            {/* 2025 Employee Awards */}
            <button onClick={() => setShowAwardsModal(true)} className="group relative h-[200px] rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 w-full text-left">
              <img src="https://images.unsplash.com/photo-1764874299025-d8b2251f307d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="2025 Employee Awards" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005f83]/90 to-transparent"></div>
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <div className="inline-block bg-[#ffe102] text-[#005f83] text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full mb-[8px]">RECOGNITION</div>
                <h3 className="text-white text-[20px] font-['Poppins'] font-bold">TASC Spotlight</h3>
              </div>
            </button>

            {/* TASC in the Media */}
            <button
              type="button"
              onClick={() => setShowMediaModal(true)}
              className="group relative h-[200px] rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 text-left w-full"
            >
              <img src="https://images.unsplash.com/photo-1557804506-e969d7b32a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="TASC in the Media" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#56db46]/90 to-transparent"></div>
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <div className="inline-block bg-white text-[#005f83] text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full mb-[8px]">NEWS</div>
                <h3 className="text-white text-[20px] font-['Poppins'] font-bold">TASC in the Media</h3>
              </div>
            </button>
          </div>
        </div>

          </div>
          {/* END LEFT COLUMN */}

          {/* RIGHT COLUMN - Sidebar */}
          <RightSidebar 
            currentTime={currentTime}
            formatTime={formatTime}
            getTimeOfDay={getTimeOfDay}
          />
        </div>
      </div>

      {/* Awards Modal */}
      {showAwardsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[20px] sm:p-[32px] lg:p-[40px]" onClick={() => setShowAwardsModal(false)}>
            <div className="bg-white rounded-[20px] max-w-[1400px] w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-[24px] sm:px-[32px] lg:px-[48px] py-[20px] sm:py-[24px] flex items-center justify-between">
                <h2 className="text-[24px] font-['Poppins'] font-bold text-[#005f83]">TASC Spotlight</h2>
                <button
                  onClick={() => setShowAwardsModal(false)}
                  className="w-[40px] h-[40px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-[20px] h-[20px] text-gray-600" />
                </button>
              </div>
              <div className="px-[24px] sm:px-[32px] lg:px-[48px] py-[24px] sm:py-[32px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {spotlightDocuments.map((item) => (
                    <button
                      key={item.file}
                      type="button"
                      onClick={() => openDocumentPreview(item.title, ["Terrific Tales", item.file])}
                      className="group bg-gray-50 rounded-[16px] p-[20px] border border-gray-200 hover:border-[#00bfff] hover:shadow-md transition-all text-left"
                    >
                      <div className="flex items-start gap-[14px]">
                        <div className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center border border-gray-200 shrink-0">
                          <FileText className="w-[22px] h-[22px] text-[#005f83]" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[15px] sm:text-[16px] font-['Poppins'] font-bold text-[#005f83] mb-[8px] leading-[24px]">
                            {item.title}
                          </h4>
                          <span className="text-[12px] sm:text-[13px] font-['Gotham'] text-[#00bfff] font-semibold">
                            Open document
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
        </div>
      )}

      {/* Policy Updates Modal */}
      {showPolicyModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[20px] sm:p-[32px] lg:p-[40px]"
          onClick={() => setShowPolicyModal(false)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[1000px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-[24px] sm:px-[32px] lg:px-[40px] py-[20px] flex items-center justify-between">
              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-['Poppins'] font-bold text-[#005f83]">
                Policy Updates
              </h2>
              <button
                onClick={() => setShowPolicyModal(false)}
                className="w-[40px] h-[40px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-[20px] h-[20px] text-gray-600" />
              </button>
            </div>
            <div className="px-[24px] sm:px-[32px] lg:px-[40px] py-[24px]">
              {policyGroups.map((group) => {
                const isDropdownGroup = group.title === "TASC IDC Policies" || group.title === "TASC UAE Policies";
                const content = (
                  <>
                    {group.items.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        {group.items.map((item) => (
                        <button
                          key={`${group.title}-${item.file}`}
                          type="button"
                          onClick={() => openDocumentPreview(item.title, [...group.basePath, item.file])}
                          className="group bg-gray-50 rounded-[16px] p-[20px] border border-gray-200 hover:border-[#00bfff] hover:shadow-md transition-all text-left"
                        >
                            <div className="flex items-start gap-[14px]">
                              <div className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center border border-gray-200 shrink-0">
                                <FileText className="w-[22px] h-[22px] text-[#005f83]" strokeWidth={2.5} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-[15px] sm:text-[16px] font-['Poppins'] font-bold text-[#005f83] mb-[8px] leading-[24px]">
                                  {item.title}
                                </h4>
                                <span className="text-[12px] sm:text-[13px] font-['Gotham'] text-[#00bfff] font-semibold">
                                  Open policy document
                                </span>
                              </div>
                            </div>
                        </button>
                        ))}
                      </div>
                    )}
                    {group.sections?.map((section) => (
                      <div key={`${group.title}-${section.title}`} className="mt-[22px]">
                        <h4 className="text-[14px] sm:text-[15px] font-['Poppins'] font-semibold text-[#005f83] mb-[12px]">
                          {section.title}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                          {section.items.map((item) => (
                          <button
                            key={`${section.title}-${item.file}`}
                            type="button"
                            onClick={() => openDocumentPreview(item.title, [...section.basePath, item.file])}
                            className="group bg-gray-50 rounded-[16px] p-[20px] border border-gray-200 hover:border-[#00bfff] hover:shadow-md transition-all text-left"
                          >
                              <div className="flex items-start gap-[14px]">
                                <div className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center border border-gray-200 shrink-0">
                                  <FileText className="w-[22px] h-[22px] text-[#005f83]" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-[15px] sm:text-[16px] font-['Poppins'] font-bold text-[#005f83] mb-[8px] leading-[24px]">
                                    {item.title}
                                  </h4>
                                  <span className="text-[12px] sm:text-[13px] font-['Gotham'] text-[#00bfff] font-semibold">
                                    Open policy document
                                  </span>
                                </div>
                              </div>
                          </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                );

                if (isDropdownGroup) {
                  return (
                    <details key={group.title} className="mb-[28px] last:mb-0 rounded-[16px] border border-gray-200 bg-white">
                      <summary className="cursor-pointer list-none px-[16px] sm:px-[20px] py-[14px] flex items-center justify-between">
                        <span className="text-[16px] sm:text-[18px] font-['Poppins'] font-bold text-[#003f5a]">
                          {group.title}
                        </span>
                        <span className="text-[12px] font-['Gotham'] text-[#00bfff] font-semibold">
                          View policies
                        </span>
                      </summary>
                      <div className="px-[16px] sm:px-[20px] pb-[20px]">
                        {content}
                      </div>
                    </details>
                  );
                }

                return (
                  <div key={group.title} className="mb-[28px] last:mb-0">
                    <h3 className="text-[16px] sm:text-[18px] font-['Poppins'] font-bold text-[#003f5a] mb-[14px]">
                      {group.title}
                    </h3>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Document Preview Modal */}
      {previewDoc && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[20px] sm:p-[32px] lg:p-[40px]"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[1100px] w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-[20px] sm:px-[28px] py-[16px]">
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  {previewDoc.title}
                </h2>
                <p className="text-[12px] sm:text-[13px] font-['Gotham'] text-gray-500">
                  Preview only. Download disabled.
                </p>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="w-[38px] h-[38px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-[18px] h-[18px] text-gray-600" />
              </button>
            </div>
            <div className="flex-1 bg-gray-50">
              {previewDoc.type === "image" && (
                <div className="h-full w-full flex items-center justify-center p-[16px]">
                  <img src={previewDoc.url} alt={previewDoc.title} className="max-h-[80vh] max-w-full rounded-[12px] shadow-lg" />
                </div>
              )}
              {(previewDoc.type === "pdf" || previewDoc.type === "office") && (
                <iframe
                  title={previewDoc.title}
                  src={previewDoc.url}
                  className="w-full h-[80vh] border-0"
                />
              )}
              {previewDoc.type === "unknown" && (
                <div className="h-full w-full flex flex-col items-center justify-center p-[24px] text-center">
                  <FileText className="w-[36px] h-[36px] text-[#005f83] mb-[12px]" />
                  <p className="text-[14px] font-['Poppins'] text-gray-700">
                    Preview is not available for this file type.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Training Documents Modal */}
      {showTrainingModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[20px] sm:p-[32px] lg:p-[40px]"
          onClick={() => setShowTrainingModal(false)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[1000px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-[24px] sm:px-[32px] lg:px-[40px] py-[20px] flex items-center justify-between">
              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-['Poppins'] font-bold text-[#005f83]">
                Training Documents
              </h2>
              <button
                onClick={() => setShowTrainingModal(false)}
                className="w-[40px] h-[40px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-[20px] h-[20px] text-gray-600" />
              </button>
            </div>
            <div className="px-[24px] sm:px-[32px] lg:px-[40px] py-[24px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                {trainingDocuments.map((item) => (
                  <button
                    key={item.file}
                    type="button"
                    onClick={() => openDocumentPreview(item.title, ["Training Documents", item.file])}
                    className="group bg-gray-50 rounded-[16px] p-[20px] border border-gray-200 hover:border-[#00bfff] hover:shadow-md transition-all text-left"
                  >
                    <div className="flex items-start gap-[14px]">
                      <div className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center border border-gray-200 shrink-0">
                        <FileText className="w-[22px] h-[22px] text-[#005f83]" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[15px] sm:text-[16px] font-['Poppins'] font-bold text-[#005f83] mb-[8px] leading-[24px]">
                          {item.title}
                        </h4>
                        <span className="text-[12px] sm:text-[13px] font-['Gotham'] text-[#00bfff] font-semibold">
                          Open training document
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TASC In The Media Modal */}
      {showMediaModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[20px] sm:p-[32px] lg:p-[40px]"
          onClick={() => setShowMediaModal(false)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[1100px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-[24px] sm:px-[32px] lg:px-[40px] py-[20px] flex items-center justify-between">
              <div>
                <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-['Poppins'] font-bold text-[#005f83]">
                  TASC in the Media
                </h2>
                <p className="text-[12px] sm:text-[13px] font-['Gotham'] text-gray-500 mt-[4px]">
                  {mediaMentions.length} mentions from the PR tracker
                </p>
              </div>
              <button
                onClick={() => setShowMediaModal(false)}
                className="w-[40px] h-[40px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-[20px] h-[20px] text-gray-600" />
              </button>
            </div>
            <div className="px-[24px] sm:px-[32px] lg:px-[40px] py-[24px]">
              <div className="space-y-[14px]">
                {mediaMentions.map((item, index) => (
                  <div
                    key={`${item.outlet}-${item.date}-${index}`}
                    className="bg-gray-50 border border-gray-200 rounded-[14px] p-[18px] hover:border-[#00bfff] hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap items-center gap-[10px] mb-[10px]">
                      <span className="bg-[#005f83] text-white text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full">
                        {item.region}
                      </span>
                      <span className="bg-[#ffe102]/80 text-[#005f83] text-[10px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-full">
                        {item.type}
                      </span>
                      <span className="text-[12px] font-['Gotham'] text-gray-500">{item.date}</span>
                    </div>
                    <div className="text-[14px] font-['Poppins'] font-bold text-[#005f83] mb-[6px]">
                      {item.outlet}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[14px] font-['Gotham'] text-gray-700 hover:text-[#00bfff] transition-colors inline-flex items-center gap-[6px]"
                      >
                        {item.title}
                        <ArrowRight className="w-[14px] h-[14px]" />
                      </a>
                    ) : (
                      <div className="text-[14px] font-['Gotham'] text-gray-700">{item.title}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
