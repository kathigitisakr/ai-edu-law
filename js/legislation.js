/* ============================================================
   ΝΟΜΟΘΕΣΙΑ — Δεδομένα & Λογική Φιλτραρίσματος
   Κάθε εγγραφή περιέχει: τίτλο, περιγραφή, πλαίσιο, βαθμίδες,
   κατηγορία κινδύνου, ημερομηνία, σχετικά άρθρα
   
   ΕΠΕΚΤΑΣΙΜΟΤΗΤΑ: Για προσθήκη νέου νόμου, απλά προσθέστε
   ένα νέο αντικείμενο στον πίνακα legislationData.
   ============================================================ */

const legislationData = [

  /* ===========================================================
     ΕΛΛΗΝΙΚΟ ΠΛΑΙΣΙΟ
     =========================================================== */
  {
    id: "gr-syntagma-16",
    title: "Σύνταγμα της Ελλάδας — Άρθρο 16",
    subtitle: "Δικαίωμα στην παιδεία",
    description: "Η παιδεία αποτελεί βασική αποστολή του Κράτους, στοχεύοντας στην ηθική, πνευματική, επαγγελματική και φυσική ανάπτυξη. Η παράγραφος 4 κατοχυρώνει τη δωρεάν δημόσια εκπαίδευση σε όλες τις βαθμίδες. Σε συνδυασμό με το Άρθρο 5Α, θεμελιώνεται αναδυόμενο δικαίωμα στην ψηφιακή παιδεία (Panagopoulou, 2025).",
    scope: "national",       // national | european | international
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "obligation",      // high-risk | prohibited | obligation | info
    badgeText: "Θεμελιώδες δικαίωμα",
    date: "1975 (αναθ. 2001)",
    articles: ["Άρ. 16 §§ 1-9", "Άρ. 5Α § 2"],
    keywords: ["σύνταγμα", "παιδεία", "ψηφιακή παιδεία", "δωρεάν εκπαίδευση", "θεμελιώδες δικαίωμα"]
  },
  {
    id: "gr-4624",
    title: "Ν. 4624/2019",
    subtitle: "Εθνική εφαρμογή GDPR",
    description: "Προσαρμογή της ελληνικής νομοθεσίας στον GDPR. Ορίζει την ηλικία ψηφιακής συναίνεσης στα 15 έτη (Άρ. 21). Δημόσια σχολεία, ΑΕΙ και ΙΕΚ θεωρούνται υπεύθυνοι επεξεργασίας. Η νόμιμη βάση για δημόσια εκπαιδευτικά ιδρύματα είναι κατά κανόνα το «δημόσιο καθήκον» (Άρ. 6§1ε GDPR). Ποινικές κυρώσεις για εκ προθέσεως παραβάσεις (Άρ. 38).",
    scope: "national",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "obligation",
    badgeText: "Υποχρέωση",
    date: "29/08/2019",
    articles: ["Άρ. 21 (ηλικία 15)", "Άρ. 26 (δημόσιοι φορείς)", "Άρ. 29-30 (εξαιρέσεις έρευνας)", "Άρ. 38 (ποινικές κυρώσεις)"],
    keywords: ["GDPR", "προσωπικά δεδομένα", "συναίνεση", "ανήλικοι", "δημόσιο καθήκον", "ΑΠΔΠΧ"]
  },
  {
    id: "gr-4961",
    title: "Ν. 4961/2022",
    subtitle: "Αναδυόμενες τεχνολογίες στον δημόσιο τομέα",
    description: "Ρυθμίζει τη χρήση ΤΝ στον δημόσιο τομέα — συμπεριλαμβανομένων εκπαιδευτικών ιδρυμάτων. Απαιτεί ρητή νομοθετική πρόβλεψη (Άρ. 4§1) και αλγοριθμική εκτίμηση αντικτύπου (Άρ. 5§1) πριν την ανάπτυξη. Αυστηρότερος σε κάποια σημεία από τον EU AI Act, καθώς δεν αρκεί εσωτερική αξιολόγηση.",
    scope: "national",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "high-risk",
    badgeText: "Αυστηρό καθεστώς",
    date: "20/07/2022",
    articles: ["Άρ. 4§1 (ρητή νομική βάση)", "Άρ. 5§1 (αλγοριθμική εκτίμηση αντικτύπου)"],
    keywords: ["τεχνητή νοημοσύνη", "δημόσιος τομέας", "αλγοριθμική εκτίμηση", "σχολεία", "ΑΕΙ"]
  },
  {
    id: "gr-bioethics-2025",
    title: "Γνώμη ΕΕΒΤ (Μάρτιος 2025)",
    subtitle: "ΤΝ στα ελληνικά σχολεία — Εθνική Επιτροπή Βιοηθικής & Τεχνοηθικής",
    description: "Θεσμική γνωμοδότηση με 8 ηθικές αρχές: ανθρώπινη αξιοπρέπεια, αυτονομία, ωφέλεια/μη βλάβη, ισότιμη πρόσβαση, συμπληρωματικότητα, διαφάνεια, βιωσιμότητα. Κεντρική αρχή: «Ενίσχυση αντί αντικατάστασης, εφευρετικότητα αντί επανάληψης». Η ΤΝ πρέπει να προσαρμόζεται στις ανάγκες της εκπαίδευσης, όχι το αντίστροφο.",
    scope: "national",
    levels: ["primary", "secondary"],
    badge: "info",
    badgeText: "Θεσμική γνώμη",
    date: "Μάρτιος 2025",
    articles: ["8 ηθικές αρχές"],
    keywords: ["βιοηθική", "τεχνοηθική", "σχολεία", "ηθικές αρχές", "συμπληρωματικότητα", "ΕΕΒΤ"]
  },
  {
    id: "gr-nov2025",
    title: "Νομοθετική ρύθμιση Νοεμβρίου 2025",
    subtitle: "Εξουσιοδότηση ΥπΠαιδ για χρήση ΤΝ",
    description: "Νομοθετική διάταξη που εξουσιοδοτεί το Υπουργείο Παιδείας να χρησιμοποιεί συστήματα ΤΝ και να οργανώνει επιμόρφωση εκπαιδευτικών, με «αποκλειστικό σκοπό την υποστήριξη του εκπαιδευτικού έργου και την ενίσχυση της εκπαιδευτικής διαδικασίας» σε πρωτοβάθμια και δευτεροβάθμια εκπαίδευση.",
    scope: "national",
    levels: ["primary", "secondary"],
    badge: "obligation",
    badgeText: "Νέα ρύθμιση",
    date: "Νοέμβριος 2025",
    articles: [],
    keywords: ["υπουργείο παιδείας", "εξουσιοδότηση", "επιμόρφωση", "σχολεία"]
  },
  {
    id: "gr-ai-schools",
    title: "Πιλοτικό «AI in Schools»",
    subtitle: "20 Λύκεια — ChatGPT Edu — Σεπτέμβριος 2025",
    description: "Μνημόνιο ΥπΠαιδ – Ίδρυμα Ωνάση – OpenAI. ChatGPT Edu (GDPR-compliant, χωρίς διαφημίσεις) σε 14 πειραματικά + 6 Ιδρύματος Ωνάση Λύκεια. DPIA ολοκληρωμένη, σύμβαση μη κοινοποίησης δεδομένων. Στόχος ΙΕΠ: 70.000 εκπαιδευτικοί. Χρηματοδότηση €40 εκατ. από Ταμείο Ανάκαμψης.",
    scope: "national",
    levels: ["secondary"],
    badge: "info",
    badgeText: "Πιλοτικό",
    date: "Σεπτέμβριος 2025",
    articles: [],
    keywords: ["AI in Schools", "ChatGPT", "πιλοτικό", "λύκεια", "ΙΕΠ", "Ωνάσης"]
  },
  {
    id: "gr-2121",
    title: "Ν. 2121/1993 (τροπ. Ν. 4996/2022)",
    subtitle: "Πνευματική ιδιοκτησία — Ενσωμάτωση Οδηγίας DSM",
    description: "Βασικός νόμος πνευματικής ιδιοκτησίας. Δημιουργός μόνο φυσικό πρόσωπο. Τροποποιημένος με Ν. 4996/2022 για ενσωμάτωση Οδηγίας DSM 2019/790 (εξαιρέσεις TDM). Κανένα ειδικό άρθρο για AI-generated έργα — νομικό κενό.",
    scope: "national",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "info",
    badgeText: "Νομικό κενό",
    date: "1993 (τροπ. 2022)",
    articles: ["TDM εξαιρέσεις (Άρ. 3, 4 Οδηγίας DSM)"],
    keywords: ["πνευματική ιδιοκτησία", "copyright", "TDM", "AI-generated", "δημιουργός"]
  },
  {
    id: "gr-4957",
    title: "Ν. 4957/2022",
    subtitle: "Ανώτατη εκπαίδευση — Ακαδημαϊκή ακεραιότητα",
    description: "Εγκαθιδρύει Επιτροπές Δεοντολογίας & Ακεραιότητας Έρευνας σε κάθε ΑΕΙ. Πλαίσιο για θεσμικές πολιτικές σχετικά με τη χρήση ΤΝ σε φοιτητικές εργασίες, εξετάσεις και ακαδημαϊκή δεοντολογία.",
    scope: "national",
    levels: ["tertiary"],
    badge: "obligation",
    badgeText: "Ακαδημαϊκή δεοντολογία",
    date: "21/07/2022",
    articles: [],
    keywords: ["ανώτατη εκπαίδευση", "ακαδημαϊκή ακεραιότητα", "δεοντολογία", "λογοκλοπή", "ΑΕΙ"]
  },

  /* ===========================================================
     ΕΥΡΩΠΑΪΚΟ ΠΛΑΙΣΙΟ
     =========================================================== */
  {
    id: "eu-gdpr",
    title: "Κανονισμός (ΕΕ) 2016/679 — GDPR",
    subtitle: "Γενικός Κανονισμός Προστασίας Δεδομένων",
    description: "Θεμελιώδες πλαίσιο προστασίας δεδομένων. Άρθρο 22: δικαίωμα μη υπαγωγής σε αυτοματοποιημένες αποφάσεις. Άρθρο 35: υποχρεωτική DPIA για υψηλού κινδύνου επεξεργασίες. Άρθρο 25: προστασία από τον σχεδιασμό (privacy by design). Ειδικές ρυθμίσεις για ανήλικους (Άρ. 8) και αυτοματοποιημένη λήψη αποφάσεων.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "obligation",
    badgeText: "Δεσμευτικός",
    date: "25/05/2018",
    articles: ["Άρ. 22 (αυτοματοποιημένες αποφάσεις)", "Άρ. 35 (DPIA)", "Άρ. 25 (by design)", "Άρ. 8 (ανήλικοι)", "Άρ. 6§1ε (δημόσιο καθήκον)"],
    keywords: ["GDPR", "προσωπικά δεδομένα", "DPIA", "αυτοματοποιημένες αποφάσεις", "privacy by design"]
  },
  {
    id: "eu-edpb-28",
    title: "Γνώμη ΕΣΠΔ 28/2024",
    subtitle: "ΤΝ μοντέλα & προσωπικά δεδομένα",
    description: "Κρίσιμη γνώμη: τα AI models που εκπαιδεύτηκαν σε προσωπικά δεδομένα δεν θεωρούνται αυτομάτως ανώνυμα. Η εποπτική αρχή δύναται να διατάξει καταστροφή μοντέλου αν τα δεδομένα εκπαίδευσής του ήταν παράνομα. Το έννομο συμφέρον μπορεί να αποτελέσει νόμιμη βάση αλλά υπό αυστηρό τριπλό έλεγχο.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "high-risk",
    badgeText: "Κρίσιμη γνώμη",
    date: "17/12/2024",
    articles: [],
    keywords: ["ΕΣΠΔ", "EDPB", "AI models", "ανωνυμία", "καταστροφή μοντέλου", "legitimate interest"]
  },
  {
    id: "eu-ai-act",
    title: "Κανονισμός (ΕΕ) 2024/1689 — EU AI Act",
    subtitle: "Ο πρώτος ολοκληρωμένος νόμος για την ΤΝ παγκοσμίως",
    description: "Risk-based προσέγγιση: απαράδεκτος κίνδυνος (απαγορεύσεις), υψηλός κίνδυνος, περιορισμένος, ελάχιστος. Η εκπαίδευση κατατάσσεται ρητά στον υψηλό κίνδυνο (Recital 56, Annex III §3). Τέσσερις κατηγορίες: πρόσβαση/εισαγωγή, αξιολόγηση μαθησιακών αποτελεσμάτων, εκτίμηση εκπαιδευτικού επιπέδου, παρακολούθηση εξετάσεων.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "high-risk",
    badgeText: "Υψηλός κίνδυνος",
    date: "01/08/2024",
    articles: ["Recital 56", "Annex III §3 (α-δ)", "Άρ. 5 (απαγορεύσεις)", "Άρ. 4 (AI literacy)", "Άρ. 9-15 (υποχρεώσεις παρόχων)", "Άρ. 26 (υποχρεώσεις deployers)", "Άρ. 27 (FRIA)"],
    keywords: ["AI Act", "υψηλός κίνδυνος", "high-risk", "εκπαίδευση", "human oversight", "risk management"]
  },
  {
    id: "eu-ai-act-prohibitions",
    title: "EU AI Act — Απαγορευμένες πρακτικές στην εκπαίδευση",
    subtitle: "Σε ισχύ από 2 Φεβρουαρίου 2025",
    description: "Απαγορεύεται: (α) αναγνώριση συναισθημάτων σε εκπαιδευτικά ιδρύματα (Άρ. 5§1στ), (β) κοινωνική βαθμολόγηση / social scoring (Άρ. 5§1γ), (γ) χειραγωγικές τεχνικές που εκμεταλλεύονται ηλικία μαθητών (Άρ. 5§1β). Πρόστιμα: €35 εκατ. ή 7% παγκόσμιου κύκλου εργασιών.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary"],
    badge: "prohibited",
    badgeText: "Απαγόρευση",
    date: "02/02/2025",
    articles: ["Άρ. 5§1β", "Άρ. 5§1γ", "Άρ. 5§1στ"],
    keywords: ["απαγόρευση", "αναγνώριση συναισθημάτων", "social scoring", "emotion recognition", "πρόστιμα"]
  },
  {
    id: "eu-ai-act-literacy",
    title: "EU AI Act — Υποχρέωση AI Literacy",
    subtitle: "Άρθρο 4 — Σε ισχύ από 2 Φεβρουαρίου 2025",
    description: "Πάροχοι και deployers (δηλ. σχολεία, πανεπιστήμια) οφείλουν να εξασφαλίζουν «επαρκές επίπεδο AI literacy» του προσωπικού που χειρίζεται συστήματα ΤΝ. Αναλογική υποχρέωση βάσει ρόλου — δεν απαιτείται πιστοποίηση, αλλά τεκμηρίωση δράσεων. Η ανεπάρκεια AI literacy = επιβαρυντικός παράγοντας σε κυρώσεις.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "obligation",
    badgeText: "Ήδη σε ισχύ",
    date: "02/02/2025",
    articles: ["Άρ. 4"],
    keywords: ["AI literacy", "ψηφιακός γραμματισμός", "επιμόρφωση", "εκπαιδευτικοί"]
  },
  {
    id: "eu-ai-act-highrisk",
    title: "EU AI Act — Υποχρεώσεις High-Risk (Εκπαίδευση)",
    subtitle: "Πλήρης εφαρμογή από 2 Αυγούστου 2026",
    description: "Πάροχοι high-risk εκπαιδευτικών AI: risk management (Άρ. 9), data governance (Άρ. 10), τεχνική τεκμηρίωση (Άρ. 11), αυτόματη καταγραφή (Άρ. 12), διαφάνεια (Άρ. 13), human oversight (Άρ. 14), ακρίβεια/ανθεκτικότητα/κυβερνοασφάλεια (Άρ. 15). Deployers: ενημέρωση μαθητών (Άρ. 26§11), FRIA για δημόσιους φορείς (Άρ. 27).",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "high-risk",
    badgeText: "Αύγουστος 2026",
    date: "02/08/2026",
    articles: ["Άρ. 9-15", "Άρ. 26§11", "Άρ. 27 (FRIA)"],
    keywords: ["high-risk", "conformity assessment", "human oversight", "FRIA", "risk management", "transparency"]
  },
  {
    id: "eu-dsm",
    title: "Οδηγία (ΕΕ) 2019/790 — DSM Directive",
    subtitle: "Πνευματική ιδιοκτησία στην Ψηφιακή Ενιαία Αγορά",
    description: "Ρυθμίζει text and data mining (TDM). Άρθρο 3: TDM από ερευνητικούς οργανισμούς χωρίς opt-out. Άρθρο 4: TDM γενικού σκοπού με δυνατότητα opt-out δικαιούχων. Ο AI Act (Άρ. 53§1γ-δ) απαιτεί από GPAI providers πολιτική συμμόρφωσης copyright. Εκκρεμής ΔΕΕ C-250/25.",
    scope: "european",
    levels: ["tertiary", "lifelong"],
    badge: "info",
    badgeText: "Copyright & AI",
    date: "17/04/2019",
    articles: ["Άρ. 3 (TDM ερευνητικό)", "Άρ. 4 (TDM γενικό + opt-out)", "Άρ. 53§1γ-δ AI Act"],
    keywords: ["copyright", "πνευματική ιδιοκτησία", "TDM", "text data mining", "DSM", "opt-out"]
  },
  {
    id: "eu-ethical-guidelines",
    title: "Ηθικές Κατευθύνσεις ΕΕ για ΤΝ στη Διδασκαλία",
    subtitle: "European Commission — DG EAC (2022, ενημ. 2025)",
    description: "Κατευθυντήριες γραμμές για εκπαιδευτικούς σχετικά με την ηθική χρήση ΤΝ και δεδομένων στη μάθηση. Σενάρια χρήσης, καθοδηγητικά ερωτήματα, βασικές αρχές. Εφαρμόσιμες απευθείας στην τάξη.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Κατευθύνσεις",
    date: "2022 (ενημ. 2025)",
    articles: [],
    keywords: ["ηθικές κατευθύνσεις", "ethical guidelines", "εκπαιδευτικοί", "τάξη", "DG EAC"]
  },
  {
    id: "eu-digital-omnibus",
    title: "Digital Omnibus Package",
    subtitle: "Πρόταση τροποποίησης AI Act — Νοέμβριος 2025",
    description: "Πρόταση Ευρωπαϊκής Επιτροπής για απλοποίηση εφαρμογής AI Act. Πιθανή αναβολή high-risk υποχρεώσεων έως 16 μήνες (μέγιστη ημερομηνία: 2/12/2027). Πρόταση μετατροπής AI literacy από υποχρέωση σε «ενθάρρυνση». Υπό διαπραγμάτευση σε τρίλογο.",
    scope: "european",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "info",
    badgeText: "Υπό διαπραγμάτευση",
    date: "19/11/2025",
    articles: ["COM(2025) 836 final"],
    keywords: ["omnibus", "simplification", "αναβολή", "τρίλογος"]
  },

  /* ===========================================================
     ΔΙΕΘΝΕΣ ΠΛΑΙΣΙΟ
     =========================================================== */
  {
    id: "int-unesco-ethics",
    title: "Σύσταση UNESCO για την Ηθική της ΤΝ",
    subtitle: "Νοέμβριος 2021 — 194 κράτη-μέλη",
    description: "Πρώτο παγκόσμιο ηθικό πλαίσιο για ΤΝ. Αρχές: μη βλάβη, ασφάλεια, δικαιοσύνη, ιδιωτικότητα, διαφάνεια, λογοδοσία, ψηφιακή παιδεία. Η εκπαίδευση αναγνωρίζεται ως ένα από τα 4 κεντρικά πεδία πολιτικής (Policy Area 5). Προτείνει Ethical Impact Assessment.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "info",
    badgeText: "Ηθικό πλαίσιο",
    date: "23/11/2021",
    articles: ["Policy Area 5 (Education & Research)"],
    keywords: ["UNESCO", "ηθική", "ethics", "recommendation", "impact assessment"]
  },
  {
    id: "int-unesco-genai",
    title: "UNESCO — Guidance on GenAI in Education",
    subtitle: "Κατευθυντήριες γραμμές 2023",
    description: "Ειδική καθοδήγηση για τη χρήση generative AI στην εκπαίδευση και την έρευνα. Προτάσεις για πολιτικές αποδεκτής χρήσης, ακαδημαϊκή ακεραιότητα, ρύθμιση σε εθνικό επίπεδο.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Καθοδήγηση",
    date: "2023",
    articles: [],
    keywords: ["UNESCO", "generative AI", "ChatGPT", "πολιτική χρήσης"]
  },
  {
    id: "int-unesco-competency",
    title: "UNESCO AI Competency Frameworks",
    subtitle: "Πλαίσια δεξιοτήτων ΤΝ για εκπαιδευτικούς & μαθητές (2024)",
    description: "Πρώτα παγκόσμια πλαίσια δεξιοτήτων ΤΝ. Για εκπαιδευτικούς: 5 τομείς ικανοτήτων × 3 επίπεδα (Acquire, Deepen, Create). Για μαθητές: αντίστοιχο πλαίσιο. Περιλαμβάνει ηθική ΤΝ, κριτική σκέψη, εφαρμογή σε μάθηση.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "obligation",
    badgeText: "Δεξιότητες",
    date: "Σεπτέμβριος 2024",
    articles: ["5 τομείς × 3 επίπεδα"],
    keywords: ["UNESCO", "competency framework", "δεξιότητες", "εκπαιδευτικοί", "μαθητές"]
  },
  {
    id: "int-coe-convention",
    title: "Σύμβαση-Πλαίσιο Συμβουλίου Ευρώπης (CETS 225)",
    subtitle: "Πρώτη νομικά δεσμευτική διεθνής συνθήκη για ΤΝ",
    description: "Υπεγράφη 5/9/2024 από ΕΕ, ΗΠΑ, ΗΒ, Καναδά κ.ά. Απαιτεί risk/impact assessments, μέτρα αποκατάστασης, μη διάκριση, διαφάνεια. Δεν περιέχει ειδικά άρθρα εκπαίδευσης — εφαρμόζεται οριζόντια. Δεν έχει τεθεί ακόμη σε ισχύ (απαιτεί 5 κυρώσεις).",
    scope: "international",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "info",
    badgeText: "Σε αναμονή κύρωσης",
    date: "05/09/2024",
    articles: ["CETS No. 225"],
    keywords: ["Συμβούλιο Ευρώπης", "Council of Europe", "συνθήκη", "treaty", "framework convention"]
  },
  {
    id: "int-oecd",
    title: "Αρχές ΟΟΣΑ για την ΤΝ",
    subtitle: "2019, ενημ. 2023-2024",
    description: "Πέντε αρχές: ευημερία, σεβασμός κράτους δικαίου/ανθρωπίνων δικαιωμάτων, διαφάνεια/εξηγησιμότητα, ανθεκτικότητα/ασφάλεια, λογοδοσία. AI Literacy Framework για πρωτοβάθμια/δευτεροβάθμια (σε συνεργασία με ΕΕ, Μάιος 2025). Digital Education Outlook 2023.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary", "lifelong"],
    badge: "info",
    badgeText: "Αρχές πολιτικής",
    date: "2019 (ενημ. 2024)",
    articles: ["5 Αρχές ΟΟΣΑ"],
    keywords: ["OECD", "ΟΟΣΑ", "αρχές", "principles", "AI literacy framework"]
  },
  {
    id: "int-usa-eo",
    title: "ΗΠΑ — Executive Orders για ΤΝ",
    subtitle: "EO 14110 (ανακλήθηκε) → EO 14277 (2025)",
    description: "EO 14110 (Οκτ. 2023, Biden): ολοκληρωμένη ρύθμιση ΤΝ — ανακλήθηκε Ιαν. 2025. EO 14277 (Απρ. 2025, Trump): pro-innovation, Task Force AI Education for Youth, κατεύθυνση στο DoE να ενσωματώσει ΤΝ σε grants. Αποσπασματική προσέγγιση χωρίς ειδική εκπαιδευτική νομοθεσία.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Pro-innovation",
    date: "Απρίλιος 2025",
    articles: ["EO 14277"],
    keywords: ["ΗΠΑ", "USA", "executive order", "Trump", "Biden", "pro-innovation"]
  },
  {
    id: "int-usa-ferpa",
    title: "FERPA — ΗΠΑ",
    subtitle: "Family Educational Rights and Privacy Act (1974)",
    description: "Βασικός ομοσπονδιακός νόμος για προστασία δεδομένων μαθητών. Θεωρείται ξεπερασμένος για την εποχή ΤΝ — δεν έχει ενημερωθεί πάνω από μία δεκαετία. Third-party AI vendors μπορεί να θεωρηθούν «school officials» υπό εξαιρέσεις FERPA. COPPA (τροπ. 2025) για κάτω των 13.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Ξεπερασμένος",
    date: "1974",
    articles: ["FERPA", "COPPA (τροπ. 2025)"],
    keywords: ["FERPA", "COPPA", "ΗΠΑ", "student privacy", "school officials"]
  },
  {
    id: "int-china",
    title: "Κίνα — Interim Measures for GenAI",
    subtitle: "Ενδιάμεσα μέτρα διαχείρισης υπηρεσιών γενετικής ΤΝ (2023)",
    description: "Συνεκδοθέντα από 7 υπουργεία (μεταξύ αυτών το Υπ. Παιδείας). Απαιτούν content moderation, αλγοριθμική εγγραφή, AI content labeling, υποχρεώσεις training data. Κρατικός έλεγχος. Υπό σχεδιασμό ολοκληρωμένος νόμος ΤΝ.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "obligation",
    badgeText: "Κρατικός έλεγχος",
    date: "Αύγουστος 2023",
    articles: [],
    keywords: ["Κίνα", "China", "generative AI", "content moderation", "κρατικός έλεγχος"]
  },
  {
    id: "int-uk-dfe",
    title: "Ηνωμένο Βασίλειο — DfE Guidance + Jisc",
    subtitle: "Pro-innovation, sector-specific soft law",
    description: "Χωρίς ολοκληρωμένη νομοθεσία ΤΝ. Το Department for Education δημοσίευσε guidance (2025) για generative AI στα σχολεία: human oversight, χρήση ΤΝ μόνο σε formative/low-stakes αξιολόγηση, συμμόρφωση UK GDPR. Το Jisc παρέχει πλαίσια για further/higher education.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Soft law",
    date: "2025",
    articles: [],
    keywords: ["UK", "Jisc", "DfE", "soft law", "guidance", "Ηνωμένο Βασίλειο"]
  },
  {
    id: "int-australia",
    title: "Αυστραλία — Framework for GenAI in Schools",
    subtitle: "Εθνικό πλαίσιο (2023, αναθεωρ. 2025) + Higher Ed (2025)",
    description: "Πρώτο εθνικό πλαίσιο αποκλειστικά για GenAI σε σχολεία. Αναθεωρήθηκε τον Ιούνιο 2025. Ξεχωριστό πλαίσιο για ανώτατη εκπαίδευση (2025). Πρακτικά εργαλεία ανά πολιτεία (π.χ. NSW EduChat).",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Framework",
    date: "2023 (αναθ. 2025)",
    articles: [],
    keywords: ["Αυστραλία", "Australia", "framework", "schools", "higher education"]
  },
  {
    id: "int-colorado",
    title: "Colorado AI Act (SB 24-205) — ΗΠΑ",
    subtitle: "Πολιτειακός νόμος — εκπαίδευση ως consequential decision",
    description: "Ορίζει «εγγραφή σε εκπαίδευση ή εκπαιδευτική ευκαιρία» ως «consequential decision» υπό υποχρεώσεις impact assessment, risk management, γνωστοποίηση. Εφαρμογή αναβλήθηκε σε Ιούνιο 2026.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "high-risk",
    badgeText: "Consequential decision",
    date: "Μάιος 2024 (εφ. Ιούνιος 2026)",
    articles: ["SB 24-205"],
    keywords: ["Colorado", "state law", "consequential decision", "impact assessment"]
  },
  {
    id: "int-japan",
    title: "Ιαπωνία — AI Promotion Act",
    subtitle: "Νόμος προώθησης ΤΝ (2025)",
    description: "Innovation-first προσέγγιση χωρίς χρηματικές κυρώσεις. MEXT AI Education Accelerator: στόχος 50.000 εκπαιδευτικοί. Νέα curricula με ΤΝ στο σχολείο.",
    scope: "international",
    levels: ["primary", "secondary", "tertiary"],
    badge: "info",
    badgeText: "Pro-innovation",
    date: "Ιούνιος 2025",
    articles: [],
    keywords: ["Ιαπωνία", "Japan", "AI Promotion Act", "MEXT", "innovation"]
  }
];

/* ============================================================
   ΛΟΓΙΚΗ ΦΙΛΤΡΑΡΙΣΜΑΤΟΣ ΚΑΙ RENDERING
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Τρέχουσες επιλογές φίλτρων
  let activeScope = 'all';       // all | national | european | international
  let activeLevels = new Set();  // primary, secondary, tertiary, lifelong — κενό = όλα
  let searchQuery = '';

  // DOM στοιχεία
  const scopeTabs = document.querySelectorAll('.scope-tab');
  const levelFilters = document.querySelectorAll('.level-filter');
  const searchInput = document.getElementById('legislation-search');
  const resultsContainer = document.getElementById('legislation-results');
  const countEl = document.getElementById('legislation-count');

  // Αρχικοποίηση
  renderResults();

  // Event: Tabs πλαισίου (Εθνικό/Ευρωπαϊκό/Διεθνές)
  scopeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      scopeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeScope = tab.dataset.scope;
      renderResults();
    });
  });

  // Event: Φίλτρα βαθμίδας
  levelFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      const level = btn.dataset.level;
      if (level === 'all') {
        activeLevels.clear();
        levelFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Αφαίρεση "Όλες" αν ήταν ενεργό
        levelFilters.forEach(b => {
          if (b.dataset.level === 'all') b.classList.remove('active');
        });
        activeLevels.delete('all');

        if (activeLevels.has(level)) {
          activeLevels.delete(level);
          btn.classList.remove('active');
        } else {
          activeLevels.add(level);
          btn.classList.add('active');
        }
        // Αν δεν μένει κανένα, ενεργοποίηση "Όλες"
        if (activeLevels.size === 0) {
          levelFilters.forEach(b => {
            if (b.dataset.level === 'all') b.classList.add('active');
          });
        }
      }
      renderResults();
    });
  });

  // Event: Αναζήτηση
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderResults();
    });
  }

  /* --- Φιλτράρισμα δεδομένων --- */
  function getFilteredData() {
    return legislationData.filter(item => {
      // Φίλτρο πλαισίου
      if (activeScope !== 'all' && item.scope !== activeScope) return false;

      // Φίλτρο βαθμίδας
      if (activeLevels.size > 0) {
        const hasMatch = [...activeLevels].some(lvl => item.levels.includes(lvl));
        if (!hasMatch) return false;
      }

      // Αναζήτηση κειμένου
      if (searchQuery) {
        return searchInFields(item, ['title', 'subtitle', 'description', 'keywords', 'articles'], searchQuery);
      }

      return true;
    });
  }

  /* --- Μετατροπή badge σε CSS class --- */
  function badgeClass(type) {
    const map = {
      'high-risk': 'badge-high-risk',
      'prohibited': 'badge-prohibited',
      'obligation': 'badge-obligation',
      'info': 'badge-info'
    };
    return map[type] || 'badge-info';
  }

  /* --- Ετικέτα πλαισίου --- */
  function scopeLabel(scope) {
    const map = {
      'national': '🇬🇷 Ελληνικό',
      'european': '🇪🇺 Ευρωπαϊκό',
      'international': '🌍 Διεθνές'
    };
    return map[scope] || scope;
  }

  /* --- Ετικέτα βαθμίδας --- */
  function levelLabel(level) {
    const map = {
      'primary': 'Πρωτοβάθμια',
      'secondary': 'Δευτεροβάθμια',
      'tertiary': 'Τριτοβάθμια',
      'lifelong': 'Διά βίου'
    };
    return map[level] || level;
  }

  /* --- Rendering αποτελεσμάτων --- */
  function renderResults() {
    const data = getFilteredData();
    countEl.textContent = data.length;

    if (data.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">Δεν βρέθηκαν αποτελέσματα. Δοκιμάστε διαφορετικά φίλτρα.</div>';
      return;
    }

    resultsContainer.innerHTML = data.map(item => `
      <div class="card card-accent fade-in visible" id="${item.id}">
        <div class="flex-between" style="flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.8rem;">
          <div>
            <span class="badge badge-sm ${badgeClass(item.badge)}">${escapeHTML(item.badgeText)}</span>
            <span class="badge badge-sm badge-info" style="margin-left: 0.3rem;">${scopeLabel(item.scope)}</span>
          </div>
          <span class="text-xs text-muted">${escapeHTML(item.date)}</span>
        </div>
        <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">${escapeHTML(item.title)}</h3>
        <p class="text-sm text-muted" style="margin-bottom: 0.8rem; font-style: italic;">${escapeHTML(item.subtitle)}</p>
        <p class="text-sm" style="margin-bottom: 0.8rem;">${escapeHTML(item.description)}</p>
        ${item.articles.length > 0 ? `
          <div style="margin-bottom: 0.5rem;">
            ${item.articles.map(a => `<span class="badge badge-sm badge-obligation" style="margin: 0.15rem;">${escapeHTML(a)}</span>`).join(' ')}
          </div>
        ` : ''}
        <div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">
          ${item.levels.map(l => `<span class="text-xs text-muted" style="background: var(--border-light); padding: 0.1rem 0.4rem; border-radius: 3px;">${levelLabel(l)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
});
