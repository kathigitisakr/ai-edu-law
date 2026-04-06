/* ============================================================
   QUIZ — Αυτοαξιολόγηση γνώσεων ΤΝ & Εκπαιδευτικού Δικαίου
   
   Τύποι ερωτήσεων: πολλαπλής επιλογής (mc) & σενάρια (case)
   Κάθε ερώτηση: 4 επιλογές, 1 σωστή, εξήγηση & νομική αναφορά
   
   ΕΠΕΚΤΑΣΙΜΟΤΗΤΑ: Προσθέστε νέες ερωτήσεις στον πίνακα quizData.
   Κάθε ερώτηση χρειάζεται: id, type, question, options[], correct, 
   explanation, lawRef.
   ============================================================ */

const quizData = [
  /* === ΣΕΝΑΡΙΑ (CASE STUDIES) === */
  {
    id: 1,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Ο Διευθυντής του σχολείου σας ζητά να χρησιμοποιήσετε μια νέα εφαρμογή ΤΝ που αξιολογεί αυτόματα τα γραπτά των μαθητών. Ποιο είναι το ΠΡΩΤΟ πράγμα που πρέπει να ελέγξετε;",
    options: [
      "Αν η εφαρμογή είναι δωρεάν",
      "Αν έχει γίνει DPIA (Εκτίμηση Αντικτύπου στην Προστασία Δεδομένων)",
      "Αν τη χρησιμοποιούν και άλλα σχολεία",
      "Αν τη συστήνει κάποιος συνάδελφος"
    ],
    correct: 1,
    explanation: "Η DPIA (Εκτίμηση Αντικτύπου) είναι υποχρεωτική ΠΡΙΝ τη χρήση AI εργαλείου που επεξεργάζεται δεδομένα μαθητών. Η αυτόματη βαθμολόγηση αποτελεί high-risk σύστημα (Annex III§3β) και περιλαμβάνει ευάλωτα υποκείμενα (μαθητές) + καινοτόμο τεχνολογία = τουλάχιστον 2 κριτήρια ΕΣΠΔ.",
    lawRef: "GDPR Άρ. 35 · EU AI Act Annex III § 3β"
  },
  {
    id: 2,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Μαθητής Β' Λυκείου υποβάλλει έκθεση που φαίνεται γραμμένη εξ ολοκλήρου από ChatGPT. Ποια είναι η καλύτερη πρακτική αντιμετώπιση;",
    options: [
      "Μηδενίζω αμέσως χωρίς κανένα tool ανίχνευσης αφού είναι «προφανές»",
      "Χρησιμοποιώ AI detection tool και αν δείξει >80%, μηδενίζω",
      "Ζητάω προφορική παρουσίαση, εφαρμόζω τη σχολική πολιτική αποδεκτής χρήσης ΤΝ, δίνω δίκαιη ακρόαση",
      "Δεν κάνω τίποτα — δεν υπάρχει νόμος που να το απαγορεύει"
    ],
    correct: 2,
    explanation: "Τα AI detection tools είναι αναξιόπιστα (ιδιαίτερα σε ελληνικά). Απαιτείται: (α) σαφής πολιτική σχολείου, (β) δίκαιη ακρόαση πριν κυρώσεις, (γ) εναλλακτικές μέθοδοι αξιολόγησης (προφορική παρουσίαση, process-based). Ο μηδενισμός χωρίς ακρόαση παραβιάζει βασικές αρχές δίκαιης διαδικασίας.",
    lawRef: "Ν. 4957/2022 · Holmes & Porayska-Pomsta, 2023"
  },
  {
    id: 3,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Η πλατφόρμα learning analytics εντοπίζει μαθητή σε «κίνδυνο εγκατάλειψης» βάσει χαμηλών βαθμών και απουσιών. Πώς πρέπει να αντιδράσετε;",
    options: [
      "Ενημερώνω αμέσως τους γονείς ότι «ο αλγόριθμος τον κατέταξε σε κίνδυνο»",
      "Αγνοώ την ειδοποίηση — ο αλγόριθμος δεν γνωρίζει τον μαθητή",
      "Επαληθεύω ανθρώπινα, ελέγχω αν ο αλγόριθμος λαμβάνει υπόψη μεροληπτικά δεδομένα, και ενεργώ βάσει δικής μου εκτίμησης",
      "Στέλνω τον μαθητή απευθείας στον ψυχολόγο"
    ],
    correct: 2,
    explanation: "Η ανθρώπινη εποπτεία είναι υποχρεωτική. Ο αλγόριθμος ΠΡΟΤΕΙΝΕΙ, δεν αποφασίζει. Πρέπει να ελέγξετε: (α) αν τα δεδομένα είναι ακριβή, (β) αν υπάρχει αλγοριθμική μεροληψία (π.χ. κοινωνικοοικονομικά στοιχεία), (γ) να αξιοποιήσετε τη δική σας γνώση για τον μαθητή. Η τυφλή αποδοχή AI αποτελεσμάτων δεν είναι νόμιμη ούτε παιδαγωγικά σωστή.",
    lawRef: "EU AI Act Άρ. 14 (human oversight) · Annex III § 3β"
  },
  {
    id: 4,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Μια EdTech εταιρεία προσφέρει δωρεάν εφαρμογή «ανάλυσης προσοχής μαθητών» που χρησιμοποιεί κάμερα για να μετρά πόσο «προσέχουν» οι μαθητές. Τι πρέπει να κάνετε;",
    options: [
      "Δοκιμάζω πρώτα μόνος μου και αν δουλεύει καλά, το εισάγω στην τάξη",
      "Ζητάω DPIA αλλά αν η εταιρεία λέει ότι είναι GDPR-compliant, το δέχομαι",
      "Αρνούμαι — η αναγνώριση συναισθημάτων σε σχολεία είναι ΑΠΑΓΟΡΕΥΜΕΝΗ από 2/2/2025",
      "Το χρησιμοποιώ μόνο αν οι γονείς δώσουν συγκατάθεση"
    ],
    correct: 2,
    explanation: "Η ανάλυση εκφράσεων προσώπου / επιπέδου προσοχής μέσω βιομετρικών δεδομένων αποτελεί «αναγνώριση συναισθημάτων» και είναι ΑΠΑΓΟΡΕΥΜΕΝΗ σε εκπαιδευτικά ιδρύματα (Άρ. 5§1στ AI Act). Ούτε DPIA, ούτε γονική συγκατάθεση μπορεί να νομιμοποιήσει κάτι που ο νόμος απαγορεύει ρητά. Πρόστιμο: έως €35 εκατ.",
    lawRef: "EU AI Act Άρ. 5§1στ · Κατευθυντήριες Γραμμές C(2025) 884"
  },
  {
    id: 5,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Χρησιμοποιείτε ChatGPT για να φτιάξετε ένα φύλλο εργασίας. Κατά λάθος, στο prompt γράφετε: «Ο μαθητής μου Γιάννης Π. έχει δυσλεξία και χρειάζεται…». Τι πρόβλημα δημιουργείται;",
    options: [
      "Κανένα — το ChatGPT δεν αποθηκεύει δεδομένα",
      "Έχετε μεταβιβάσει ευαίσθητα προσωπικά δεδομένα (δεδομένα υγείας) σε τρίτο μέρος χωρίς νόμιμη βάση",
      "Πρόβλημα μόνο αν ο Γιάννης είναι κάτω των 15",
      "Πρόβλημα μόνο αν η OpenAI δεν τηρεί GDPR"
    ],
    correct: 1,
    explanation: "Ανεξάρτητα από τις πολιτικές αποθήκευσης της OpenAI, η αποστολή ονοματεπώνυμου + πληροφορίας υγείας (δυσλεξία) σε εξωτερικό πάροχο αποτελεί μεταβίβαση ειδικής κατηγορίας δεδομένων (Άρ. 9 GDPR) χωρίς νόμιμη βάση. Αυτό συνιστά παραβίαση GDPR ανεξαρτήτως ηλικίας μαθητή. ΠΟΤΕ μη συμπεριλαμβάνετε αναγνωρίσιμα δεδομένα μαθητών σε prompts.",
    lawRef: "GDPR Άρ. 9 (ειδικές κατηγορίες) · Άρ. 28 (εκτελών επεξεργασία)"
  },

  /* === ΕΡΩΤΗΣΕΙΣ ΓΝΩΣΕΩΝ === */
  {
    id: 6,
    type: "mc",
    question: "Σύμφωνα με τον EU AI Act, ποιο από τα παρακάτω ΔΕΝ ανήκει στα high-risk εκπαιδευτικά AI συστήματα (Annex III §3);",
    options: [
      "Σύστημα εισαγωγής σε πανεπιστήμιο",
      "Σύστημα αυτόματης βαθμολόγησης εξετάσεων",
      "Chatbot που απαντά σε ερωτήσεις μαθητών σχετικά με τα μαθήματα",
      "Σύστημα ηλεκτρονικής επιτήρησης εξετάσεων (e-proctoring)"
    ],
    correct: 2,
    explanation: "Ένα απλό chatbot πληροφοριών δεν εμπίπτει στις 4 κατηγορίες του Annex III §3 (πρόσβαση/εισαγωγή, αξιολόγηση μαθησιακών αποτελεσμάτων, εκτίμηση εκπαιδευτικού επιπέδου, παρακολούθηση εξετάσεων). Ωστόσο, αν το chatbot ΑΞΙΟΛΟΓΕΙ ή ΚΑΤΕΥΘΥΝΕΙ τη μάθηση, τότε ενδέχεται να εμπίπτει.",
    lawRef: "EU AI Act Annex III § 3 (α-δ), Recital 56"
  },
  {
    id: 7,
    type: "mc",
    question: "Από πότε ισχύει η απαγόρευση αναγνώρισης συναισθημάτων σε σχολεία;",
    options: [
      "1 Αυγούστου 2024",
      "2 Φεβρουαρίου 2025",
      "2 Αυγούστου 2026",
      "Δεν έχει ψηφιστεί ακόμη"
    ],
    correct: 1,
    explanation: "Οι απαγορευμένες πρακτικές (Άρθρο 5) τέθηκαν σε ισχύ στις 2 Φεβρουαρίου 2025, δηλαδή 6 μήνες μετά την έναρξη ισχύος του Κανονισμού (1/8/2024). Η αναγνώριση συναισθημάτων σε εκπαιδευτικά ιδρύματα (Άρ. 5§1στ) ισχύει ΗΔΗ.",
    lawRef: "EU AI Act Άρ. 5§1στ · Άρ. 113 (μεταβατικές)"
  },
  {
    id: 8,
    type: "mc",
    question: "Ποια είναι η ηλικία ψηφιακής συναίνεσης στην Ελλάδα σύμφωνα με τον Ν. 4624/2019;",
    options: [
      "13 ετών",
      "15 ετών",
      "16 ετών (default GDPR)",
      "18 ετών"
    ],
    correct: 1,
    explanation: "Η Ελλάδα όρισε τα 15 έτη (Άρ. 21, Ν. 4624/2019), χαμηλότερα από το default 16 του GDPR (Άρ. 8). Αυτό σημαίνει ότι μαθητής 15+ μπορεί να δώσει μόνος του συγκατάθεση σε υπηρεσίες πληροφορικής. Κάτω των 15: απαιτείται γονική συγκατάθεση.",
    lawRef: "Ν. 4624/2019 Άρ. 21 · GDPR Άρ. 8"
  },
  {
    id: 9,
    type: "mc",
    question: "Τι απαιτεί ο Ν. 4961/2022 για τη χρήση ΤΝ σε δημόσια σχολεία;",
    options: [
      "Μόνο ενημέρωση του Συλλόγου Γονέων",
      "Ρητή νομοθετική πρόβλεψη + αλγοριθμική εκτίμηση αντικτύπου",
      "Απλή έγκριση του Διευθυντή",
      "Πιστοποίηση CE του εργαλείου"
    ],
    correct: 1,
    explanation: "Ο Ν. 4961/2022 (Άρ. 4§1) απαιτεί ρητή νομοθετική πρόβλεψη για χρήση ΤΝ σε δημόσιες αποφάσεις, καθώς και αλγοριθμική εκτίμηση αντικτύπου (Άρ. 5§1) πριν την ανάπτυξη. Δεν αρκεί εσωτερική απόφαση — αυτό τον κάνει αυστηρότερο σε σημεία από τον EU AI Act.",
    lawRef: "Ν. 4961/2022 Άρ. 4§1, 5§1"
  },
  {
    id: 10,
    type: "mc",
    question: "Σύμφωνα με τη Γνώμη ΕΣΠΔ 28/2024, τι ισχύει για AI μοντέλα εκπαιδευμένα σε προσωπικά δεδομένα;",
    options: [
      "Θεωρούνται πάντα ανώνυμα μετά την εκπαίδευση",
      "Δεν υπόκεινται στον GDPR",
      "Η εποπτική αρχή μπορεί να διατάξει καταστροφή του μοντέλου αν τα δεδομένα εκπαίδευσης ήταν παράνομα",
      "Μπορούν να χρησιμοποιηθούν ελεύθερα εφόσον δεν αποθηκεύουν δεδομένα"
    ],
    correct: 2,
    explanation: "Η Γνώμη 28/2024 έκρινε ρητά ότι: (α) τα AI models ΔΕΝ θεωρούνται αυτομάτως ανώνυμα, (β) η εποπτική αρχή μπορεί να διατάξει καταστροφή μοντέλου, (γ) το legitimate interest μπορεί να χρησιμοποιηθεί ως βάση αλλά υπό αυστηρό τριπλό έλεγχο.",
    lawRef: "Γνώμη ΕΣΠΔ 28/2024"
  },
  {
    id: 11,
    type: "mc",
    question: "Ποιο κράτος διαθέτει αποκλειστικό εθνικό πλαίσιο (framework) για Generative AI στα σχολεία;",
    options: [
      "Ηνωμένες Πολιτείες Αμερικής",
      "Κίνα",
      "Αυστραλία",
      "Ιαπωνία"
    ],
    correct: 2,
    explanation: "Η Αυστραλία δημοσίευσε τον Οκτώβριο 2023 το «Australian Framework for Generative AI in Schools» — το πρώτο εθνικό πλαίσιο αποκλειστικά για GenAI σε σχολεία. Αναθεωρήθηκε τον Ιούνιο 2025 και συμπληρώθηκε με ξεχωριστό πλαίσιο για ανώτατη εκπαίδευση (2025).",
    lawRef: "Australian Framework for GenAI in Schools (2023, αναθ. 2025)"
  },
  {
    id: 12,
    type: "mc",
    question: "Σύμφωνα με τη νομολογία του ΔΕΕ, ποιος μπορεί να κατέχει πνευματική ιδιοκτησία σε ένα κείμενο;",
    options: [
      "Μόνο φυσικό πρόσωπο που εκδηλώνει ελεύθερες δημιουργικές επιλογές",
      "Οποιοσδήποτε, συμπεριλαμβανομένου AI συστήματος",
      "Ο κάτοχος του AI εργαλείου",
      "Ο χρήστης που πληκτρολόγησε το prompt"
    ],
    correct: 0,
    explanation: "Βάσει νομολογίας ΔΕΕ (Infopaq C-5/08, Painer C-145/10), copyright αναγνωρίζεται μόνο σε «πνευματική δημιουργία» που αντανακλά «ελεύθερες δημιουργικές επιλογές» ανθρώπου. Αμιγώς AI-generated κείμενο χωρίς ουσιαστική ανθρώπινη συμβολή ΔΕΝ προστατεύεται.",
    lawRef: "ΔΕΕ Infopaq C-5/08, Painer C-145/10 · Ν. 2121/1993"
  },
  {
    id: 13,
    type: "mc",
    question: "Τι σημαίνει η κεντρική αρχή της Γνώμης ΕΕΒΤ «ενίσχυση αντί αντικατάστασης»;",
    options: [
      "Η ΤΝ πρέπει να αντικαθιστά τον εκπαιδευτικό στις ρουτίνες",
      "Η ΤΝ πρέπει να χρησιμοποιείται ως εργαλείο υποστήριξης χωρίς να υποκαθιστά τον ανθρώπινο ρόλο",
      "Οι μαθητές πρέπει να μαθαίνουν προγραμματισμό αντί να χρησιμοποιούν AI",
      "Τα σχολεία πρέπει να ενισχύσουν τα IT τμήματά τους"
    ],
    correct: 1,
    explanation: "Η ΕΕΒΤ τονίζει ότι η ΤΝ πρέπει να «ενισχύει» (augment) — όχι να αντικαθιστά — τον εκπαιδευτικό. Η φυσική αλληλεπίδραση πρέπει να παραμένει στον πυρήνα. Η υποκατάσταση ανθρώπινης κριτικής ικανότητας οδηγεί σε «ετεροπροσδιορισμό του μαθητή».",
    lawRef: "Γνώμη ΕΕΒΤ, Μάρτιος 2025"
  },
  {
    id: 14,
    type: "mc",
    question: "Ποιο FERPA πρόβλημα εντοπίζεται στις ΗΠΑ σχετικά με AI στην εκπαίδευση;",
    options: [
      "Είναι πολύ αυστηρός και εμποδίζει την καινοτομία",
      "Δεν έχει ενημερωθεί εδώ και δεκαετία και θεωρείται ξεπερασμένος για ΤΝ",
      "Απαγορεύει πλήρως τη χρήση AI σε σχολεία",
      "Ισχύει μόνο σε πανεπιστήμια, όχι σε σχολεία"
    ],
    correct: 1,
    explanation: "Ο FERPA (1974) δεν έχει ενημερωθεί πάνω από μία δεκαετία. Δεν περιέχει AI-specific διατάξεις. Third-party AI vendors μπορεί να θεωρηθούν «school officials» αλλά χωρίς σαφείς κανόνες. Αποτελεί χαρακτηριστικό παράδειγμα νομοθετικού κενού σε σχέση με τον ευρωπαϊκό EU AI Act.",
    lawRef: "FERPA (1974) · The 74 Million (2024)"
  },
  {
    id: 15,
    type: "mc",
    question: "Πότε τίθενται σε πλήρη εφαρμογή οι υποχρεώσεις για high-risk AI συστήματα εκπαίδευσης;",
    options: [
      "Ήδη από 2 Φεβρουαρίου 2025",
      "2 Αυγούστου 2025",
      "2 Αυγούστου 2026",
      "2 Αυγούστου 2027"
    ],
    correct: 2,
    explanation: "Οι υποχρεώσεις high-risk (risk management, data governance, human oversight, τεχνική τεκμηρίωση, FRIA κ.λπ.) εφαρμόζονται πλήρως στις 2/8/2026. Σημ.: οι απαγορεύσεις (Άρ. 5) και η AI literacy (Άρ. 4) ισχύουν ήδη από 2/2/2025, ενώ το Digital Omnibus μπορεί να δώσει παράταση έως 16 μήνες.",
    lawRef: "EU AI Act Άρ. 113 · Digital Omnibus COM(2025) 836"
  },
  {
    id: 16,
    type: "case",
    question: "📋 ΣΕΝΑΡΙΟ: Πανεπιστημιακός καθηγητής χρησιμοποιεί AI σύστημα για προ-αξιολόγηση εργασιών φοιτητών. Ένας φοιτητής λαμβάνει χαμηλή βαθμολογία. Ο καθηγητής στέλνει τον βαθμό χωρίς να τον ελέγξει ο ίδιος. Ποιο δικαίωμα παραβιάζεται;",
    options: [
      "Δικαίωμα στην ιδιωτικότητα",
      "Δικαίωμα μη υπαγωγής σε αυτοματοποιημένη απόφαση (Άρ. 22 GDPR)",
      "Δικαίωμα πρόσβασης σε δεδομένα",
      "Δικαίωμα φορητότητας δεδομένων"
    ],
    correct: 1,
    explanation: "Η αποστολή βαθμολογίας βάσει αποκλειστικά AI αξιολόγησης, χωρίς ανθρώπινη επανεξέταση, παραβιάζει το Άρθρο 22 GDPR: ο φοιτητής δικαιούται να μην υπόκειται σε απόφαση βάσει αποκλειστικά αυτοματοποιημένης επεξεργασίας που τον «επηρεάζει σημαντικά». Ένας βαθμός που καθορίζει ακαδημαϊκή πορεία αποτελεί τέτοια «σημαντική επίδραση».",
    lawRef: "GDPR Άρ. 22 §§ 1-3 · Colonna, 2024"
  },
  {
    id: 17,
    type: "mc",
    question: "Ποιο από τα παρακάτω αποτελεί ΥΠΟΧΡΕΩΣΗ ήδη σε ισχύ (Μάρτιος 2026) για ένα σχολείο;",
    options: [
      "Fundamental Rights Impact Assessment (FRIA)",
      "AI literacy του προσωπικού",
      "Conformity assessment για AI εργαλεία",
      "Τήρηση logs για 6 μήνες"
    ],
    correct: 1,
    explanation: "Η υποχρέωση AI literacy (Άρ. 4) ισχύει από 2/2/2025 — ΗΔΗ. Οι υπόλοιπες (FRIA, conformity assessment, logs) εφαρμόζονται από 2/8/2026. Αυτό σημαίνει ότι σήμερα κάθε σχολείο πρέπει τουλάχιστον να τεκμηριώνει δράσεις AI literacy.",
    lawRef: "EU AI Act Άρ. 4, 113"
  },
  {
    id: 18,
    type: "mc",
    question: "Τι προβλέπει η Σύσταση της UNESCO (2021) για την εκπαίδευση σε σχέση με την ΤΝ;",
    options: [
      "Πλήρη απαγόρευση ΤΝ σε σχολεία κάτω της τριτοβάθμιας",
      "Ενσωμάτωση ηθικής ΤΝ στα curricula, Ethical Impact Assessment, ψηφιακή παιδεία",
      "Υποχρεωτική πιστοποίηση εκπαιδευτικών σε AI",
      "Δημιουργία παγκόσμιας αρχής εποπτείας AI στην εκπαίδευση"
    ],
    correct: 1,
    explanation: "Η UNESCO Recommendation on the Ethics of AI (2021) αναγνωρίζει την εκπαίδευση ως 1 από 4 κεντρικά πεδία πολιτικής (Policy Area 5). Προτείνει: ενσωμάτωση ηθικής ΤΝ στα curricula, Ethical Impact Assessment για high-risk συστήματα, ενισχυμένη data governance, ψηφιακή παιδεία για μαθητές και εκπαιδευτικούς.",
    lawRef: "UNESCO Recommendation on Ethics of AI, 2021 · Policy Area 5"
  }
];

/* ============================================================
   QUIZ ENGINE — Λογική quiz, scoring, progress, feedback
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Κατάσταση quiz
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  let userAnswers = [];

  // DOM στοιχεία
  const progressFill = document.getElementById('quiz-progress-fill');
  const questionCounter = document.getElementById('quiz-question-counter');
  const questionText = document.getElementById('quiz-question-text');
  const optionsContainer = document.getElementById('quiz-options');
  const feedbackEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next');
  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('quiz-results');

  // Αρχικοποίηση
  if (quizContainer) {
    // Ανακάτεμα ερωτήσεων (Fisher-Yates shuffle)
    shuffleArray(quizData);
    renderQuestion();
  }

  /* --- Ανακάτεμα πίνακα --- */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /* --- Render τρέχουσας ερώτησης --- */
  function renderQuestion() {
    const q = quizData[currentQuestion];
    const total = quizData.length;
    answered = false;

    // Progress
    progressFill.style.width = ((currentQuestion / total) * 100) + '%';
    questionCounter.textContent = `Ερώτηση ${currentQuestion + 1} / ${total}`;

    // Ερώτηση
    const typeLabel = q.type === 'case'
      ? ''
      : '<span class="badge badge-sm badge-info" style="margin-bottom:0.5rem;display:inline-block;">Γνώσεων</span> ';
    questionText.innerHTML = typeLabel + escapeHTML(q.question);

    // Επιλογές
    optionsContainer.innerHTML = q.options.map((opt, i) =>
      `<button class="quiz-option" data-index="${i}">${escapeHTML(opt)}</button>`
    ).join('');

    // Feedback κρυφό
    feedbackEl.className = 'quiz-feedback';
    feedbackEl.style.display = 'none';
    feedbackEl.textContent = '';

    // Κουμπί "Επόμενη" κρυφό
    nextBtn.style.display = 'none';

    // Event listeners
    optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });
  }

  /* --- Χειρισμός απάντησης --- */
  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = quizData[currentQuestion];
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) score++;
    userAnswers.push({ question: q.id, selected: selectedIndex, correct: q.correct, isCorrect });

    // Χρωματισμός επιλογών
    optionsContainer.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.style.pointerEvents = 'none';
      if (i === q.correct) {
        btn.classList.add('correct');
      } else if (i === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Feedback
    feedbackEl.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
      <strong>${isCorrect ? '✅ Σωστό!' : '❌ Λάθος.'}</strong><br>
      ${escapeHTML(q.explanation)}<br>
      <span class="law-ref" style="display:inline-block;margin-top:0.5rem;">📌 ${escapeHTML(q.lawRef)}</span>
    `;

    // Κουμπί "Επόμενη"
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = currentQuestion < quizData.length - 1 ? 'Επόμενη →' : 'Δείτε τα αποτελέσματα →';
  }

  /* --- Κουμπί "Επόμενη" --- */
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        renderQuestion();
      } else {
        showResults();
      }
    });
  }

  /* --- Τελικά αποτελέσματα --- */
  function showResults() {
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);

    // Αποθήκευση τελευταίου score
    localStorage.setItem('ai-edu-quiz-score', JSON.stringify({
      score, total, percentage,
      date: new Date().toLocaleDateString('el-GR')
    }));

    // Μήνυμα βάσει score
    let message, emoji;
    if (percentage >= 90) { emoji = '🏆'; message = 'Εξαιρετική γνώση! Είστε έτοιμοι για τον Αύγουστο 2026.'; }
    else if (percentage >= 70) { emoji = '👏'; message = 'Πολύ καλά! Λίγη ακόμα μελέτη στα σημεία που χάσατε.'; }
    else if (percentage >= 50) { emoji = '📖'; message = 'Καλή αρχή. Ανατρέξτε στο Q&A και τη Νομοθεσία για τα θέματα που σας δυσκόλεψαν.'; }
    else { emoji = '💪'; message = 'Χρειάζεται περισσότερη μελέτη — ξεκινήστε από τη σελίδα Q&A!'; }

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `
      <div class="quiz-score">
        <div style="font-size:4rem;margin-bottom:1rem;">${emoji}</div>
        <div class="score-number">${score}/${total}</div>
        <div class="score-label">${percentage}% σωστές απαντήσεις</div>
        <p style="margin-top:1.5rem;color:var(--text-secondary);max-width:500px;margin-left:auto;margin-right:auto;">${message}</p>
        <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="location.reload()">🔄 Ξανά από την αρχή</button>
          <a href="qa.html" class="btn btn-outline">❓ Πάω στο Q&A</a>
          <a href="legislation.html" class="btn btn-outline">⚖️ Νομοθεσία</a>
        </div>
      </div>
      <div style="margin-top:2rem;">
        <h3 style="margin-bottom:1rem;">Ανάλυση απαντήσεων</h3>
        ${userAnswers.map((a, i) => {
          const q = quizData[i];
          return `
            <div class="card" style="margin-bottom:0.75rem; border-left:3px solid ${a.isCorrect ? 'var(--green)' : 'var(--red)'};">
              <div class="text-sm" style="margin-bottom:0.3rem;">
                <strong>${a.isCorrect ? '✅' : '❌'} Ερ. ${i+1}:</strong> ${escapeHTML(q.question.substring(0,80))}${q.question.length > 80 ? '…' : ''}
              </div>
              <div class="text-xs text-muted">
                Απαντήσατε: ${escapeHTML(q.options[a.selected])} ${a.isCorrect ? '' : '→ Σωστό: ' + escapeHTML(q.options[a.correct])}
              </div>
            </div>`;
        }).join('')}
      </div>
    `;
  }

  /* --- Φόρτωση τελευταίου score (αν υπάρχει) --- */
  const lastScore = JSON.parse(localStorage.getItem('ai-edu-quiz-score') || 'null');
  const lastScoreEl = document.getElementById('last-score');
  if (lastScore && lastScoreEl) {
    lastScoreEl.innerHTML = `Τελευταίο score: <strong class="text-gold">${lastScore.score}/${lastScore.total} (${lastScore.percentage}%)</strong> — ${lastScore.date}`;
    lastScoreEl.style.display = 'block';
  }
});
