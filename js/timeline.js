/* ============================================================
   ΧΡΟΝΟΛΟΓΙΟ — Timeline εφαρμογής EU AI Act & σχετικών ρυθμίσεων
   
   Κάθε εγγραφή: ημερομηνία, τίτλος, περιγραφή, κατάσταση,
   σχετικότητα με εκπαίδευση, νομική αναφορά
   
   Status: past (παρελθόν), active (τρέχον/κρίσιμο), 
           upcoming (επερχόμενο), pending (υπό διαπραγμάτευση)
   
   ΕΠΕΚΤΑΣΙΜΟΤΗΤΑ: Προσθέστε νέα events στον πίνακα timelineData.
   ============================================================ */

const timelineData = [
  {
    date: "25 Απριλίου 2018",
    sortDate: "2018-04-25",
    title: "Εφαρμογή GDPR",
    description: "Ο Γενικός Κανονισμός Προστασίας Δεδομένων τίθεται σε πλήρη εφαρμογή σε όλη την ΕΕ. Κάθε εκπαιδευτικό ίδρυμα υπόκειται στις υποχρεώσεις: DPIA, Άρ. 22 (αυτοματοποιημένες αποφάσεις), δικαιώματα υποκειμένων.",
    status: "past",
    relevance: "high",
    icon: "🔒",
    lawRef: "Κανονισμός (ΕΕ) 2016/679"
  },
  {
    date: "29 Αυγούστου 2019",
    sortDate: "2019-08-29",
    title: "Ν. 4624/2019 — Ελληνική εφαρμογή GDPR",
    description: "Η Ελλάδα εφαρμόζει τον GDPR. Ηλικία ψηφιακής συναίνεσης: 15 ετών. Δημόσια σχολεία = υπεύθυνοι επεξεργασίας. Νόμιμη βάση δημοσίου καθήκοντος (Άρ. 6§1ε).",
    status: "past",
    relevance: "high",
    icon: "🇬🇷",
    lawRef: "Ν. 4624/2019 (ΦΕΚ Α' 137)"
  },
  {
    date: "23 Νοεμβρίου 2021",
    sortDate: "2021-11-23",
    title: "Σύσταση UNESCO για την Ηθική της ΤΝ",
    description: "194 κράτη-μέλη υιοθετούν τον πρώτο παγκόσμιο ηθικό κώδικα ΤΝ. Η εκπαίδευση αναγνωρίζεται ως 1 από 4 κεντρικά πεδία πολιτικής (Policy Area 5). Αρχές: μη βλάβη, δικαιοσύνη, ψηφιακή παιδεία.",
    status: "past",
    relevance: "medium",
    icon: "🌍",
    lawRef: "UNESCO Recommendation on Ethics of AI"
  },
  {
    date: "20 Ιουλίου 2022",
    sortDate: "2022-07-20",
    title: "Ν. 4961/2022 — Αναδυόμενες τεχνολογίες",
    description: "Ρύθμιση χρήσης ΤΝ στον ελληνικό δημόσιο τομέα. Απαιτεί ρητή νομοθετική πρόβλεψη (Άρ. 4§1) + αλγοριθμική εκτίμηση αντικτύπου (Άρ. 5§1) για κάθε AI σε δημόσια σχολεία/ΑΕΙ.",
    status: "past",
    relevance: "high",
    icon: "🇬🇷",
    lawRef: "Ν. 4961/2022"
  },
  {
    date: "13 Μαρτίου 2024",
    sortDate: "2024-03-13",
    title: "Ψήφιση EU AI Act — Ευρωπαϊκό Κοινοβούλιο",
    description: "Το Ευρωπαϊκό Κοινοβούλιο ψηφίζει τον Κανονισμό (ΕΕ) 2024/1689 — τον πρώτο ολοκληρωμένο νόμο για ΤΝ παγκοσμίως. Η εκπαίδευση κατατάσσεται ρητά στα πεδία υψηλού κινδύνου.",
    status: "past",
    relevance: "high",
    icon: "🏛️",
    lawRef: "Κανονισμός (ΕΕ) 2024/1689"
  },
  {
    date: "1 Αυγούστου 2024",
    sortDate: "2024-08-01",
    title: "Έναρξη ισχύος EU AI Act",
    description: "Ο AI Act τίθεται σε ισχύ. Αρχίζει η αντίστροφη μέτρηση για τα στάδια εφαρμογής: 6 μήνες (απαγορεύσεις), 12 μήνες (GPAI/governance), 24 μήνες (high-risk), 36 μήνες (Annex I legacy).",
    status: "past",
    relevance: "high",
    icon: "⚖️",
    lawRef: "AI Act Άρ. 113"
  },
  {
    date: "5 Σεπτεμβρίου 2024",
    sortDate: "2024-09-05",
    title: "Σύμβαση-Πλαίσιο Συμβουλίου Ευρώπης (CETS 225)",
    description: "Ανοίγει για υπογραφή η πρώτη νομικά δεσμευτική διεθνής συνθήκη για ΤΝ. Υπογράφεται από ΕΕ, ΗΠΑ, ΗΒ, Καναδά. Απαιτεί risk assessments, μη διάκριση, διαφάνεια. Δεν έχει τεθεί ακόμη σε ισχύ.",
    status: "past",
    relevance: "medium",
    icon: "🌍",
    lawRef: "CETS No. 225"
  },
  {
    date: "Σεπτέμβριος 2024",
    sortDate: "2024-09-15",
    title: "UNESCO AI Competency Frameworks",
    description: "Δημοσιεύονται τα πρώτα παγκόσμια πλαίσια δεξιοτήτων ΤΝ: AI Competency Framework for Teachers (5 τομείς × 3 επίπεδα) και AI Competency Framework for Students.",
    status: "past",
    relevance: "medium",
    icon: "🎓",
    lawRef: "UNESCO, 2024"
  },
  {
    date: "17 Δεκεμβρίου 2024",
    sortDate: "2024-12-17",
    title: "Γνώμη ΕΣΠΔ 28/2024 — ΤΝ & Δεδομένα",
    description: "Ορόσημο: τα AI models δεν θεωρούνται αυτομάτως ανώνυμα. Η εποπτική αρχή μπορεί να διατάξει καταστροφή μοντέλου. Επηρεάζει κάθε EdTech πάροχο που επεξεργάζεται δεδομένα μαθητών.",
    status: "past",
    relevance: "high",
    icon: "🔒",
    lawRef: "Γνώμη ΕΣΠΔ 28/2024"
  },
  {
    date: "2 Φεβρουαρίου 2025",
    sortDate: "2025-02-02",
    title: "⚡ Απαγορεύσεις + AI Literacy σε ισχύ",
    description: "ΚΡΙΣΙΜΗ ΗΜΕΡΟΜΗΝΙΑ. Τίθενται σε εφαρμογή: (1) Απαγόρευση αναγνώρισης συναισθημάτων σε σχολεία (Άρ. 5§1στ), (2) Απαγόρευση social scoring (Άρ. 5§1γ), (3) Υποχρέωση AI literacy (Άρ. 4). Πρόστιμα: έως €35 εκατ.",
    status: "past",
    relevance: "critical",
    icon: "🚨",
    lawRef: "AI Act Άρ. 5, 4"
  },
  {
    date: "Μάρτιος 2025",
    sortDate: "2025-03-15",
    title: "Γνώμη ΕΕΒΤ — ΤΝ στα ελληνικά σχολεία",
    description: "Η Εθνική Επιτροπή Βιοηθικής & Τεχνοηθικής εκδίδει 8 ηθικές αρχές για εφαρμογές ΤΝ σε σχολεία. Κεντρική αρχή: «Ενίσχυση αντί αντικατάστασης, εφευρετικότητα αντί επανάληψης».",
    status: "past",
    relevance: "high",
    icon: "🇬🇷",
    lawRef: "Γνώμη ΕΕΒΤ, Μάρτιος 2025"
  },
  {
    date: "2 Αυγούστου 2025",
    sortDate: "2025-08-02",
    title: "Υποχρεώσεις GPAI + Governance",
    description: "Εφαρμογή κανόνων για μοντέλα γενικού σκοπού ΤΝ (GPAI): τεχνική τεκμηρίωση, πολιτική copyright, δημοσίευση training data summaries. Εγκαθίδρυση δομών governance (AI Office, Εθνικές Αρχές).",
    status: "past",
    relevance: "medium",
    icon: "⚙️",
    lawRef: "AI Act Άρ. 51-56, Κεφ. VII"
  },
  {
    date: "Σεπτέμβριος 2025",
    sortDate: "2025-09-01",
    title: "Πιλοτικό «AI in Schools» — 20 Λύκεια",
    description: "Εκκίνηση πιλοτικού προγράμματος (ΥπΠαιδ + Ωνάσης + OpenAI): ChatGPT Edu σε 20 Λύκεια. DPIA ολοκληρωμένη, επιμόρφωση εκπαιδευτικών από Δεκέμβριο. Στόχος ΙΕΠ: 70.000 εκπαιδευτικοί.",
    status: "past",
    relevance: "high",
    icon: "🏫",
    lawRef: "MoU ΥπΠαιδ – Ωνάσης – OpenAI"
  },
  {
    date: "Νοέμβριος 2025",
    sortDate: "2025-11-15",
    title: "Νομοθετική ρύθμιση: ΤΝ στην εκπαίδευση",
    description: "Ψηφίζεται διάταξη που εξουσιοδοτεί το ΥπΠαιδ να χρησιμοποιεί ΤΝ «αποκλειστικά για υποστήριξη εκπαιδευτικών» σε Α/θμια & Β/θμια. Ταυτόχρονα, Digital Omnibus Package πρόταση (COM(2025) 836).",
    status: "past",
    relevance: "high",
    icon: "🇬🇷",
    lawRef: "Νομοθετική ρύθμιση Νοεμβρίου 2025"
  },
  {
    date: "Μάρτιος 2026",
    sortDate: "2026-03-22",
    title: "📍 ΣΗΜΕΡΑ — Πού βρισκόμαστε",
    description: "Ήδη σε ισχύ: απαγορεύσεις (Άρ. 5), AI literacy (Άρ. 4), GPAI υποχρεώσεις. Εκκρεμεί: πλήρης εφαρμογή high-risk (Αύγουστος 2026), εγκύκλιος ΥπΠαιδ, γνωμοδότηση ΑΠΔΠΧ, DSM Directive review. Το πιλοτικό AI in Schools επεκτείνεται.",
    status: "active",
    relevance: "critical",
    icon: "📍",
    lawRef: ""
  },
  {
    date: "2 Αυγούστου 2026",
    sortDate: "2026-08-02",
    title: "⚡ ΠΛΗΡΗΣ ΕΦΑΡΜΟΓΗ HIGH-RISK — Εκπαίδευση",
    description: "Η ΚΡΙΣΙΜΟΤΕΡΗ ημερομηνία για εκπαιδευτικά ιδρύματα. Πλήρης εφαρμογή υποχρεώσεων Annex III: risk management, data governance, human oversight, τεχνική τεκμηρίωση, FRIA (δημόσιοι φορείς), ενημέρωση μαθητών (Άρ. 26§11), logs 6 μηνών.",
    status: "upcoming",
    relevance: "critical",
    icon: "🚨",
    lawRef: "AI Act Άρ. 9-15, 26, 27"
  },
  {
    date: "Καλοκαίρι 2026",
    sortDate: "2026-07-01",
    title: "Αναθεώρηση Οδηγίας DSM — Copyright & AI",
    description: "Προγραμματισμένη αναθεώρηση Οδηγίας 2019/790 για πνευματική ιδιοκτησία. Αναμένεται να αντιμετωπίσει τα κενά σχετικά με AI training data, copyright AI-generated content, TDM εξαιρέσεις.",
    status: "upcoming",
    relevance: "medium",
    icon: "©️",
    lawRef: "Οδηγία (ΕΕ) 2019/790 review"
  },
  {
    date: "2026-2027",
    sortDate: "2026-09-01",
    title: "Επέκταση AI in Schools σε όλη την Ελλάδα",
    description: "Σχεδιάζεται η επέκταση του πιλοτικού προγράμματος AI in Schools σε σχολεία σε ολόκληρη τη χώρα. €40 εκατ. από Ταμείο Ανάκαμψης για LMS με ΤΝ. Στόχος ΙΕΠ: 70.000 εκπαιδευτικοί σε AI literacy.",
    status: "upcoming",
    relevance: "high",
    icon: "🇬🇷",
    lawRef: "Εθνική Στρατηγική ΤΝ"
  },
  {
    date: "2 Δεκεμβρίου 2027",
    sortDate: "2027-12-02",
    title: "Long-stop date — Digital Omnibus",
    description: "Μέγιστη ημερομηνία εφαρμογής high-risk υποχρεώσεων αν εγκριθεί η πρόταση Digital Omnibus (αναβολή έως 16 μήνες λόγω αναμονής harmonised standards).",
    status: "pending",
    relevance: "medium",
    icon: "📋",
    lawRef: "COM(2025) 836 final"
  },
  {
    date: "2 Αυγούστου 2027",
    sortDate: "2027-08-02",
    title: "Annex I — Legacy systems",
    description: "Εφαρμογή κανόνων για high-risk AI ενσωματωμένα σε ρυθμιζόμενα προϊόντα (Annex I): ιατροτεχνολογικά, μηχανήματα, παιχνίδια κ.ά. Λιγότερο άμεσο ενδιαφέρον για σχολεία, αλλά αφορά EdTech products.",
    status: "upcoming",
    relevance: "low",
    icon: "⚙️",
    lawRef: "AI Act Άρ. 113, Annex I"
  },
  {
    date: "2 Αυγούστου 2030",
    sortDate: "2030-08-02",
    title: "High-risk: δημόσιοι φορείς legacy AI",
    description: "Τελική προθεσμία για δημόσιους φορείς (π.χ. δημόσια σχολεία, πανεπιστήμια) που χρησιμοποιούν ήδη high-risk AI systems τα οποία τέθηκαν σε λειτουργία πριν τον Αύγουστο 2026: πλήρης συμμόρφωση.",
    status: "upcoming",
    relevance: "medium",
    icon: "🏛️",
    lawRef: "AI Act Άρ. 111(2)"
  }
];

/* ============================================================
   ΛΟΓΙΚΗ TIMELINE — Rendering, φιλτράρισμα, status indicators
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  let activeFilter = 'all'; // all, past, active, upcoming

  const filterContainer = document.getElementById('timeline-filters');
  const resultsContainer = document.getElementById('timeline-results');
  const countEl = document.getElementById('timeline-count');

  // Ταξινόμηση χρονολογικά
  timelineData.sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  // Render φίλτρων
  if (filterContainer) {
    filterContainer.querySelectorAll('.filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderTimeline();
      });
    });
  }

  // Αρχικό render
  renderTimeline();

  /* --- Φιλτράρισμα --- */
  function getFilteredTimeline() {
    if (activeFilter === 'all') return timelineData;
    return timelineData.filter(item => item.status === activeFilter);
  }

  /* --- Status label & CSS --- */
  function statusInfo(status) {
    const map = {
      'past': { label: 'Παρελθόν', cssClass: 'past', badgeClass: 'badge-info' },
      'active': { label: 'Τώρα', cssClass: 'active', badgeClass: 'badge-obligation' },
      'upcoming': { label: 'Επερχόμενο', cssClass: '', badgeClass: 'badge-high-risk' },
      'pending': { label: 'Υπό διαπραγμάτευση', cssClass: '', badgeClass: 'badge-info' }
    };
    return map[status] || map['upcoming'];
  }

  /* --- Relevance indicator --- */
  function relevanceIndicator(relevance) {
    const map = {
      'critical': '🔴 Κρίσιμο για εκπαίδευση',
      'high': '🟠 Υψηλή σχετικότητα',
      'medium': '🟡 Μέτρια σχετικότητα',
      'low': '⚪ Χαμηλή σχετικότητα'
    };
    return map[relevance] || '';
  }

  /* --- Rendering --- */
  function renderTimeline() {
    const data = getFilteredTimeline();
    countEl.textContent = data.length;

    if (data.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">Δεν βρέθηκαν γεγονότα.</div>';
      return;
    }

    resultsContainer.innerHTML = data.map(item => {
      const si = statusInfo(item.status);
      return `
        <div class="timeline-item ${si.cssClass}">
          <div class="timeline-dot"></div>
          <div class="timeline-date">${item.icon} ${escapeHTML(item.date)}</div>
          <div class="timeline-card">
            <div class="flex-between" style="flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem;">
              <h3 style="font-size:1.05rem;margin:0;">${escapeHTML(item.title)}</h3>
              <span class="badge badge-sm ${si.badgeClass}">${si.label}</span>
            </div>
            <p class="text-sm" style="margin-bottom:0.5rem;">${escapeHTML(item.description)}</p>
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
              <span class="text-xs text-muted">${relevanceIndicator(item.relevance)}</span>
              ${item.lawRef ? `<span class="text-xs text-gold">📌 ${escapeHTML(item.lawRef)}</span>` : ''}
            </div>
          </div>
        </div>`;
    }).join('');
  }
});
