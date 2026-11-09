/**
 * Aurora Labs (PVT) LTD — Frontend Logic & Interactions
 */

// --- Project Data Dictionary ---
const projectsData = {
  nestor_ai: {
    title: "Nestor.AI",
    subtitle: "Trilingual Ambient AI Physician Assistant & Medical Scribe",
    badge: "Healthcare AI",
    status: "Pilot Stage",
    overview: "An ambient, multimodal assistant that listens to doctor-patient consultations and transforms them into complete, structured clinical records. Engineered specifically for the languages and clinical workflows of Sri Lankan healthcare, handling natural trilingual code-switching between Sinhala, Tamil, and English.",
    features: [
      "Ambient Trilingual Speech-to-Text with code-switching",
      "Automated extraction into standardized clinical English SOAP records",
      "Multimodal document OCR for scanned lab reports and blood charts",
      "Real-time clinical safety net for drug-drug interactions and allergy contraindications",
      "Reduces documentation time from 8 minutes per patient down to under 2.5 minutes (65% time saved)"
    ],
    techStack: [
      { layer: "AI & Speech", tech: "Whisper & Custom Fine-Tuned Trilingual NLP Models" },
      { layer: "Vision & OCR", tech: "Multimodal Vision OCR Pipeline for Lab Documents" },
      { layer: "Integration", tech: "Model Context Protocol (MCP) SDK v1.30" },
      { layer: "Backend", tech: "Firebase Cloud Functions (Node.js 22 Engine Target)" },
      { layer: "Architecture", tech: "Offline-First Resilience & PWA Ready" }
    ]
  },
  nestor_emr: {
    title: "Nestor EMR",
    subtitle: "Multi-Role Clinic OS & Electronic Medical Records",
    badge: "HealthTech Platform",
    status: "Production Ready",
    overview: "A clinic management and electronic medical records platform engineered for outpatient centres and multi-specialty practices. Features role-based access for Doctors, Nurses, Receptionists, and Administrators, with real-time laboratory and pharmacy order pipelines.",
    features: [
      "Role-based routing & security (Doctor, Nurse, Reception, Admin)",
      "Dynamic 7-day appointment scheduler with 30-slot grid",
      "Comprehensive SOAP charting, medication orders, and investigations timeline",
      "End-to-end Lab Order workflow: Ordered → Collected → Resulted",
      "End-to-end Pharmacy Order workflow: Ordered → Preparing → Dispensed",
      "Real-time clinic-wide floating instant messaging widget",
      "Integrated AI Medical Scribe gateway"
    ],
    techStack: [
      { layer: "Frontend", tech: "React 19, TypeScript, Vite 8 (Ultra-responsive SPA)" },
      { layer: "Backend API", tech: "PHP 8.4 REST API with Prepared Statements & Strict Auth" },
      { layer: "Database", tech: "MySQL 8 Relational Schema (13 core tables, clinic-scoped)" },
      { layer: "Security", tech: "Bcrypt Hashing, HttpOnly/Secure/SameSite cookies, MIME validation" },
      { layer: "CDN & Edge", tech: "StackCDN Edge Caching & cPanel deployment" }
    ]
  },
  patient_bot: {
    title: "CareGo (Patient Bot)",
    subtitle: "WhatsApp-First Patient Bot & Clinical Triage Engine",
    badge: "Patient Bot",
    status: "Production Ready",
    overview: "An intelligent patient bot and conversational intake system accessible directly via WhatsApp. Sri Lankan patients send their symptoms via text or voice notes in Sinhala, Tamil, or English. The patient bot performs a structured, one-question-at-a-time clinical triage, screens for red-flag emergencies, and packages a structured case summary into a doctor console.",
    features: [
      "Trilingual intake via WhatsApp text and audio voice notes",
      "One-at-a-time conversational triage flow without overwhelming the patient",
      "Immediate detection of red-flag emergency symptoms",
      "Automated case generation and clinical summary compilation",
      "Authenticated doctor console for review, doctor notes, and referral letters",
      "Two-way WhatsApp communication bridge powered by Baileys"
    ],
    techStack: [
      { layer: "Messaging Bridge", tech: "Self-hosted WhatsApp Bridge (Baileys Multi-Device / Node.js)" },
      { layer: "AI Reasoning", tech: "Google Gemini API / Vertex AI for triage & summarization" },
      { layer: "Serverless", tech: "Firebase Cloud Functions (Node.js 22 HTTPS Webhooks)" },
      { layer: "Database", tech: "Cloud Firestore real-time cases, conversations & messages" },
      { layer: "Doctor Console", tech: "React SPA with live Firestore onSnapshot streaming" }
    ]
  },
  edubot: {
    title: "EduBot (MediBridge Edu)",
    subtitle: "Thinking-Aloud Clinical History Trainer for Medical Students",
    badge: "Medical Education",
    status: "Active Deployment",
    overview: "An AI-powered rapid clinical consultation companion designed for medical students. Built as a step-by-step algorithmic clinical aide, it trains students through diagnostic reasoning sequentially across an 11-step gatekeeper, strictly prohibiting premature investigations until complete clinical history and differential diagnoses are established.",
    features: [
      "Phase 1 Clinical Assessment: Complete Hx, Problem List, Differential Diagnoses, Rule In/Out",
      "Strict 'No Investigations Yet' safety gate preventing premature tests",
      "Dynamic DD refinement: Up-weighted, down-weighted, and must-exclude conditions",
      "Phase 2 Investigation & Management: High-yield tests with clinical justification",
      "Supervised Tutor Console for monitoring student clinical reasoning",
      "Accessible 24/7 via WhatsApp conversational interface"
    ],
    techStack: [
      { layer: "AI Engine", tech: "Google Gemini 1.5 Pro / Vertex AI Clinical Reasoning" },
      { layer: "Backend", tech: "Firebase Cloud Functions (Index-Free Querying)" },
      { layer: "Database", tech: "Cloud Firestore (aurora-edu-medi)" },
      { layer: "Messaging", tech: "Baileys WhatsApp Bridge on Linux VPS (Port 8082)" },
      { layer: "Tutor Console", tech: "React + Vite Dashboard with Firebase Authentication" }
    ]
  },
  market_intelligence: {
    title: "Sri Lanka Market Intelligence Engine",
    subtitle: "Real Estate & Automotive Big Data Analytics Platform",
    badge: "Big Data & AI",
    status: "Production Ready",
    overview: "A high-throughput market intelligence platform tracking and analyzing Sri Lanka's automotive and Colombo real estate markets. Automatically cleans, normalizes, and computes algorithmic unit rates (Price per Perch, Price per Sq.Ft) with automated cloud database replication.",
    features: [
      "Automated high-throughput web scraping across major Sri Lankan portals",
      "Unit rate analytics: Automatic calculation of Price per Perch & Price per Sq.Ft",
      "Dual-tab interface for Vehicles and Colombo Lands, Houses & Apartments",
      "Staggered automated timers for data ingestion, deduplication, and stale listing purging",
      "Zero local RAM footprint via remote OCI Always-Free MySQL HeatWave",
      "Schema-first remote replication engine to fallback databases"
    ],
    techStack: [
      { layer: "Backend API", tech: "Python FastAPI / Gunicorn on OCI Cloud" },
      { layer: "Primary DB", tech: "Oracle Cloud Managed MySQL HeatWave (MySQL.Free)" },
      { layer: "Backup DB", tech: "Automated schema-first MariaDB remote replication" },
      { layer: "Automation", tech: "Linux systemd service & timer architecture" },
      { layer: "Frontend", tech: "React SPA with adaptive dimension and suburb filters" }
    ]
  }
};

// --- DOM Initialisation ---
document.addEventListener("DOMContentLoaded", () => {
  initThemeManager();
  initNavigation();
  initProjectFilters();
  initModalSystem();
  initContactForm();
  initClipboardButtons();
  initSmoothScroll();
});

// --- Theme Manager (Dark / Light White Mode with Accessibility) ---
function initThemeManager() {
  const themeToggles = [
    document.getElementById("themeToggle"),
    document.getElementById("mobileThemeToggle")
  ].filter(Boolean);

  function getPreferredTheme() {
    const saved = localStorage.getItem("aurora_theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme, notify = false) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aurora_theme", theme);

    themeToggles.forEach(btn => {
      const isLight = theme === "light";
      btn.setAttribute("aria-pressed", isLight.toString());
      btn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      btn.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
    });

    if (notify) {
      showToast(theme === "light" ? "Switched to Light mode" : "Switched to Dark mode");
    }
  }

  // Initial application
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  // Toggle handler
  themeToggles.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const target = current === "light" ? "dark" : "light";
      applyTheme(target, true);
    });
  });

  // Listen for OS scheme changes if not explicitly overridden by user
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!localStorage.getItem("aurora_theme")) {
        applyTheme(e.matches ? "light" : "dark", false);
      }
    });
  }
}

// --- Navigation & Mobile Menu ---
function initNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const isOpen = mobileMenu.classList.contains("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      toggleBtn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        if (toggleBtn) {
          toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
        }
      });
    });
  }

  // Active section tracking on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// --- Project Filter Tabs ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// --- Modal Architecture Viewer ---
function initModalSystem() {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalClose");
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("modalTitle");
  const viewDetailBtns = document.querySelectorAll(".btn-view-details");

  if (!modalOverlay) return;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    
    let featuresHtml = data.features.map(f => `<li><span class="feat-bullet">▹</span> ${f}</li>`).join("");
    
    let stackRowsHtml = data.techStack.map(s => `
      <div class="modal-stack-row">
        <span class="modal-stack-layer">${s.layer}</span>
        <span class="modal-stack-tech">${s.tech}</span>
      </div>
    `).join("");

    modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="badge" style="background: rgba(6, 182, 212, 0.15); color: #38bdf8; border: 1px solid rgba(6, 182, 212, 0.3);">${data.badge}</span>
        <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; margin-left: 6px;">${data.status}</span>
      </div>
      <p style="font-size: 15px; color: #cbd5e1; margin-bottom: 20px; line-height: 1.6;">${data.overview}</p>
      
      <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: #38bdf8; margin-bottom: 10px;">Core Capabilities & Workflow</h4>
      <ul style="list-style: none; margin-bottom: 24px;">
        ${featuresHtml}
      </ul>

      <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: #10b981; margin-bottom: 12px;">Technical Architecture & Stack</h4>
      <div style="background: rgba(3, 6, 10, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 14px; margin-bottom: 24px;">
        ${stackRowsHtml}
      </div>

      <div style="display: flex; justify-content: flex-end;">
        <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Close Overview</button>
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  window.closeProjectModal = function() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  viewDetailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-project");
      openModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

// --- Interactive Contact Form ---
function initContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  const sendEmailBtn = document.getElementById("btnSendEmail");
  const sendWhatsAppBtn = document.getElementById("btnSendWhatsApp");

  if (!form) return;

  // Links carrying data-interest preselect the matching inquiry type
  document.querySelectorAll("a[data-interest]").forEach(link => {
    link.addEventListener("click", () => {
      const select = document.getElementById("contactInterest");
      if (select) select.value = link.getAttribute("data-interest");
    });
  });

  function getFormData() {
    return {
      name: document.getElementById("contactName").value.trim(),
      email: document.getElementById("contactEmail").value.trim(),
      organization: document.getElementById("contactOrg").value.trim(),
      interest: document.getElementById("contactInterest").value,
      message: document.getElementById("contactMessage").value.trim()
    };
  }

  function validate(data) {
    if (!data.name) {
      showToast("Please enter your name.");
      return false;
    }
    if (!data.email) {
      showToast("Please enter your email or phone number.");
      return false;
    }
    if (!data.message) {
      showToast("Please write a short message or inquiry.");
      return false;
    }
    return true;
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validate(data)) return;

      const subject = encodeURIComponent(`[Aurora Labs Inquiry] ${data.interest} — ${data.name}`);
      const bodyText = `Name: ${data.name}\nEmail / Phone: ${data.email}\nOrganization: ${data.organization || 'N/A'}\nArea of Interest: ${data.interest}\n\nMessage:\n${data.message}\n\n--\nInquiry from Aurora Labs Website`;
      const mailtoUrl = `mailto:nestorai@embuldeniya.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

      window.location.href = mailtoUrl;

      if (alertBox) {
        alertBox.textContent = "Opening your email client to dispatch message to nestorai@embuldeniya.com...";
        alertBox.className = "form-alert show success";
      }
      showToast("Preparing email to founders...");
    });
  }

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validate(data)) return;

      const waText = `*Inquiry for Aurora Labs (PVT) LTD*\n*Name:* ${data.name}\n*Contact:* ${data.email}\n*Organization:* ${data.organization || 'N/A'}\n*Area:* ${data.interest}\n*Message:* ${data.message}`;
      const waUrl = `https://wa.me/94740264010?text=${encodeURIComponent(waText)}`;

      window.open(waUrl, "_blank");

      if (alertBox) {
        alertBox.textContent = "Connecting to official WhatsApp (+94 74 026 4010)...";
        alertBox.className = "form-alert show success";
      }
      showToast("Opening WhatsApp chat...");
    });
  }
}

// --- Copy to Clipboard Utility ---
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll(".btn-copy");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-clipboard");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy}`);
      }).catch(() => {
        showToast("Unable to copy to clipboard");
      });
    });
  });
}

// --- Toast Notification ---
function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// --- Smooth Scrolling for In-Page Anchors ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
