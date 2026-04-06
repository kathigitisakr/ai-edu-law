/* ============================================================
   ΓΛΩΣΣΑΡΙ — Όροι & Ορολογία ΤΝ και Εκπαιδευτικού Δικαίου
   
   Δίγλωσσο (EL + EN), ακρωνύμια, ορισμοί, νομικό πλαίσιο
   Αλφαβητική πλοήγηση + αναζήτηση
   
   ΕΠΕΚΤΑΣΙΜΟΤΗΤΑ: Προσθέστε νέους όρους στον πίνακα glossaryData.
   Ταξινόμηση γίνεται αυτόματα αλφαβητικά (EL).
   ============================================================ */

const glossaryData = [
  /* === Α === */
  { termEL: "Αλγοριθμική εκτίμηση αντικτύπου", termEN: "Algorithmic Impact Assessment", acronym: "AIA", definition: "Αξιολόγηση των πιθανών επιπτώσεων ενός αλγοριθμικού συστήματος σε δικαιώματα, ισότητα και κοινωνία, πριν από την ανάπτυξή του. Στην Ελλάδα, ο Ν. 4961/2022 (Άρ. 5§1) την καθιστά υποχρεωτική για χρήση ΤΝ στον δημόσιο τομέα.", lawRef: "Ν. 4961/2022 Άρ. 5§1" },
  { termEL: "Αλγοριθμική μεροληψία", termEN: "Algorithmic Bias", acronym: "", definition: "Συστηματική και αδικαιολόγητη απόκλιση στα αποτελέσματα ενός αλγορίθμου που ευνοεί ή μειονεκτεί ορισμένες ομάδες. Στην εκπαίδευση, μπορεί να αναπαράγει κοινωνικοοικονομικές, φυλετικές ή έμφυλες ανισότητες (π.χ. A-levels UK 2020).", lawRef: "EU AI Act Άρ. 10, Recital 56" },
  { termEL: "Ανθρώπινη εποπτεία", termEN: "Human Oversight", acronym: "HITL", definition: "Η υποχρέωση ένα φυσικό πρόσωπο να παρακολουθεί, ελέγχει και δύναται να παρακάμψει ή αντιστρέψει αποφάσεις ενός AI συστήματος. Ο EU AI Act (Άρ. 14) την καθιστά υποχρεωτική για high-risk συστήματα, συμπεριλαμβανομένων εκπαιδευτικών.", lawRef: "EU AI Act Άρ. 14" },
  { termEL: "Αναγνώριση συναισθημάτων", termEN: "Emotion Recognition", acronym: "", definition: "Χρήση AI για εξαγωγή συμπερασμάτων σχετικά με συναισθήματα ή προθέσεις ατόμων από βιομετρικά δεδομένα (εκφράσεις, φωνή, γλώσσα σώματος). ΑΠΑΓΟΡΕΥΕΤΑΙ σε εκπαιδευτικά ιδρύματα από 2/2/2025.", lawRef: "EU AI Act Άρ. 5§1στ" },
  { termEL: "Ακαδημαϊκή ακεραιότητα", termEN: "Academic Integrity", acronym: "", definition: "Σύνολο αρχών δεοντολογίας στην εκπαίδευση: ειλικρίνεια, εμπιστοσύνη, δικαιοσύνη, σεβασμός, υπευθυνότητα. Η χρήση generative AI εγείρει νέα ερωτήματα σχετικά με λογοκλοπή και αυθεντικότητα εργασιών.", lawRef: "Ν. 4957/2022" },
  { termEL: "Αυτοματοποιημένη λήψη αποφάσεων", termEN: "Automated Decision-Making", acronym: "ADM", definition: "Απόφαση που λαμβάνεται αποκλειστικά μέσω αυτοματοποιημένης επεξεργασίας, χωρίς ουσιαστική ανθρώπινη παρέμβαση. Το Άρ. 22 GDPR παρέχει δικαίωμα μη υπαγωγής σε τέτοιες αποφάσεις όταν παράγουν σημαντικά αποτελέσματα.", lawRef: "GDPR Άρ. 22" },

  /* === Β === */
  { termEL: "Βιομετρικά δεδομένα", termEN: "Biometric Data", acronym: "", definition: "Δεδομένα που προκύπτουν από ειδική τεχνική επεξεργασία φυσικών, φυσιολογικών ή συμπεριφορικών χαρακτηριστικών (δαχτυλικά αποτυπώματα, αναγνώριση προσώπου, φωνής). Ειδική κατηγορία δεδομένων (Άρ. 9 GDPR).", lawRef: "GDPR Άρ. 9 · EU AI Act Άρ. 3(34)" },

  /* === Γ === */
  { termEL: "Γενικός Κανονισμός Προστασίας Δεδομένων", termEN: "General Data Protection Regulation", acronym: "GDPR", definition: "Κανονισμός (ΕΕ) 2016/679. Θεμελιώδες πλαίσιο προστασίας προσωπικών δεδομένων στην ΕΕ. Ρυθμίζει νόμιμη βάση, διαφάνεια, δικαιώματα υποκειμένων, DPIA, αυτοματοποιημένες αποφάσεις. Εφαρμόζεται σε κάθε εκπαιδευτικό ίδρυμα.", lawRef: "Κανονισμός (ΕΕ) 2016/679" },
  { termEL: "Γνώμη ΕΣΠΔ", termEN: "EDPB Opinion", acronym: "", definition: "Γνωμοδότηση του Ευρωπαϊκού Συμβουλίου Προστασίας Δεδομένων. Η Γνώμη 28/2024 αποτελεί ορόσημο: τα AI models δεν θεωρούνται αυτομάτως ανώνυμα, η αρχή μπορεί να διατάξει καταστροφή μοντέλου.", lawRef: "Γνώμη ΕΣΠΔ 28/2024" },

  /* === Δ === */
  { termEL: "Δικαίωμα στην ψηφιακή παιδεία", termEN: "Right to Digital Literacy", acronym: "", definition: "Αναδυόμενο συνταγματικό δικαίωμα (Panagopoulou, 2025) που απορρέει από Άρ. 16§2 + 5Α Συντάγματος: το κράτος οφείλει να εξασφαλίσει AI literacy σε μαθητές/εκπαιδευτικούς, αποτρέποντας «ψηφιακό χάσμα».", lawRef: "Σύνταγμα Άρ. 16§2, 5Α" },
  { termEL: "Δεδομένα εκπαίδευσης μοντέλου", termEN: "Training Data", acronym: "", definition: "Τα δεδομένα (κείμενα, εικόνες, κ.λπ.) που χρησιμοποιούνται για την εκπαίδευση ενός AI μοντέλου. Εγείρουν ζητήματα πνευματικής ιδιοκτησίας (TDM) και προσωπικών δεδομένων (GDPR, Γνώμη ΕΣΠΔ 28/2024).", lawRef: "Οδηγία DSM Άρ. 3-4 · AI Act Άρ. 53" },

  /* === Ε === */
  { termEL: "Εκτίμηση Αντικτύπου Θεμελιωδών Δικαιωμάτων", termEN: "Fundamental Rights Impact Assessment", acronym: "FRIA", definition: "Εκτίμηση που υποχρεούνται να διενεργούν δημόσιοι φορείς (π.χ. πανεπιστήμια, σχολεία) ΠΡΙΝ αναπτύξουν high-risk AI σύστημα. Αξιολογεί κινδύνους για θεμελιώδη δικαιώματα, ομάδες που επηρεάζονται, μέτρα μετριασμού.", lawRef: "EU AI Act Άρ. 27" },
  { termEL: "Εκτίμηση Αντικτύπου Προστασίας Δεδομένων", termEN: "Data Protection Impact Assessment", acronym: "DPIA", definition: "Υποχρεωτική αξιολόγηση κινδύνου ΠΡΙΝ τη χρήση AI εργαλείων που επεξεργάζονται δεδομένα μαθητών. Εξετάζει αναγκαιότητα, αναλογικότητα, κινδύνους, μέτρα αντιμετώπισης. Σε εκπαιδευτικά AI: σχεδόν πάντα απαιτείται.", lawRef: "GDPR Άρ. 35 · ΕΣΠΔ WP248rev.01" },
  { termEL: "Εξόρυξη κειμένων και δεδομένων", termEN: "Text and Data Mining", acronym: "TDM", definition: "Αυτοματοποιημένη τεχνική ανάλυσης ψηφιακών κειμένων/δεδομένων. Η Οδηγία DSM (Άρ. 3-4) ρυθμίζει πότε επιτρέπεται χωρίς άδεια δικαιούχου (ερευνητικός σκοπός: χωρίς opt-out / γενικός σκοπός: με opt-out).", lawRef: "Οδηγία DSM 2019/790 Άρ. 3, 4" },

  /* === Η === */
  { termEL: "Ηλεκτρονική επιτήρηση εξετάσεων", termEN: "E-proctoring / Online Proctoring", acronym: "", definition: "Χρήση τεχνολογίας (κάμερα, λογισμικό) για παρακολούθηση εξεταζομένων εξ αποστάσεως. Κατατάσσεται ως high-risk (Annex III§3δ). Η αναγνώριση συναισθημάτων κατά τη χρήση απαγορεύεται (Άρ. 5§1στ).", lawRef: "EU AI Act Annex III § 3δ, Άρ. 5§1στ" },
  { termEL: "Ηθική εκτίμηση αντικτύπου", termEN: "Ethical Impact Assessment", acronym: "EIA", definition: "Πλαίσιο αξιολόγησης ηθικών κινδύνων AI, προτεινόμενο από τη Σύσταση UNESCO (2021). Διαφέρει από τη DPIA (δεδομένα) και τη FRIA (δικαιώματα): εστιάζει στις ευρύτερες ηθικές και κοινωνικές επιπτώσεις.", lawRef: "UNESCO Recommendation 2021" },

  /* === Κ === */
  { termEL: "Κανονισμός για την Τεχνητή Νοημοσύνη", termEN: "EU Artificial Intelligence Act", acronym: "AI Act", definition: "Κανονισμός (ΕΕ) 2024/1689. Πρώτος ολοκληρωμένος νόμος για ΤΝ παγκοσμίως. Risk-based προσέγγιση: απαράδεκτος (απαγόρευση), υψηλός, περιορισμένος, ελάχιστος κίνδυνος. Η εκπαίδευση = υψηλός κίνδυνος.", lawRef: "Κανονισμός (ΕΕ) 2024/1689" },
  { termEL: "Κοινωνική βαθμολόγηση", termEN: "Social Scoring", acronym: "", definition: "Αξιολόγηση ή κατάταξη ατόμων βάσει κοινωνικής συμπεριφοράς ή χαρακτηριστικών, η οποία οδηγεί σε μειονεκτική μεταχείριση. ΑΠΑΓΟΡΕΥΕΤΑΙ στην ΕΕ (Άρ. 5§1γ AI Act), συμπεριλαμβανομένης της εκπαίδευσης.", lawRef: "EU AI Act Άρ. 5§1γ" },
  { termEL: "Κυβερνοασφάλεια", termEN: "Cybersecurity", acronym: "", definition: "Προστασία πληροφοριακών συστημάτων από κυβερνοεπιθέσεις. Ο AI Act (Άρ. 15) απαιτεί κατάλληλα επίπεδα κυβερνοασφάλειας σε high-risk AI, συμπεριλαμβανομένων εκπαιδευτικών συστημάτων.", lawRef: "EU AI Act Άρ. 15" },

  /* === Μ === */
  { termEL: "Μεγάλο γλωσσικό μοντέλο", termEN: "Large Language Model", acronym: "LLM", definition: "Μοντέλο ΤΝ εκπαιδευμένο σε τεράστιους όγκους κειμένου, ικανό να παράγει, μεταφράζει, συνοψίζει κείμενο (π.χ. GPT-4, Claude, Gemini). Στην εκπαίδευση, χρησιμοποιείται για generative AI εργαλεία.", lawRef: "EU AI Act Άρ. 51-56 (GPAI)" },
  { termEL: "Μοντέλο γενικού σκοπού ΤΝ", termEN: "General-Purpose AI Model", acronym: "GPAI", definition: "Μοντέλο ΤΝ που μπορεί να χρησιμοποιηθεί σε ποικίλες εφαρμογές (π.χ. ChatGPT). Ο AI Act (Άρ. 51-56) επιβάλλει υποχρεώσεις: τεχνική τεκμηρίωση, πολιτική copyright, δημοσίευση περίληψης δεδομένων εκπαίδευσης.", lawRef: "EU AI Act Άρ. 51-56" },

  /* === Ν === */
  { termEL: "Νόμιμη βάση επεξεργασίας", termEN: "Legal Basis for Processing", acronym: "", definition: "Μία από τις 6 νόμιμες βάσεις του Άρ. 6 GDPR για επεξεργασία δεδομένων: (α) συγκατάθεση, (β) σύμβαση, (γ) νομική υποχρέωση, (δ) ζωτικό συμφέρον, (ε) δημόσιο καθήκον, (στ) έννομο συμφέρον. Δημόσια σχολεία: κατά κανόνα (ε).", lawRef: "GDPR Άρ. 6" },

  /* === Ο === */
  { termEL: "Οδηγία για την Ψηφιακή Ενιαία Αγορά", termEN: "Digital Single Market Directive", acronym: "DSM", definition: "Οδηγία (ΕΕ) 2019/790 — ρυθμίζει πνευματική ιδιοκτησία στο ψηφιακό περιβάλλον. Άρ. 3-4: εξαιρέσεις TDM. Σχετίζεται με AI training data, copyright AI-generated content.", lawRef: "Οδηγία (ΕΕ) 2019/790" },

  /* === Π === */
  { termEL: "Πάροχος AI συστήματος", termEN: "AI System Provider", acronym: "", definition: "Φυσικό ή νομικό πρόσωπο που αναπτύσσει ή θέτει σε λειτουργία AI σύστημα. Φέρει βασικές υποχρεώσεις βάσει AI Act: conformity assessment, risk management, τεχνική τεκμηρίωση.", lawRef: "EU AI Act Άρ. 3(3), Άρ. 9-15" },
  { termEL: "Πνευματική ιδιοκτησία", termEN: "Intellectual Property / Copyright", acronym: "IP", definition: "Νομική προστασία πρωτότυπων πνευματικών δημιουργημάτων. Στο πλαίσιο AI: ερωτήματα για ιδιοκτησία AI-generated content, χρήση προστατευμένων έργων σε training data, TDM εξαιρέσεις.", lawRef: "Ν. 2121/1993 · Οδηγία 2001/29/ΕΚ" },
  { termEL: "Προσαρμοστική μάθηση", termEN: "Adaptive Learning", acronym: "", definition: "Εκπαιδευτική προσέγγιση όπου AI τεχνολογίες προσαρμόζουν δυναμικά το περιεχόμενο, τη δυσκολία και τη ροή μάθησης στις ανάγκες κάθε μαθητή. Αν αξιολογεί μαθησιακά αποτελέσματα ή καθοδηγεί τη μαθησιακή διαδικασία → high-risk.", lawRef: "EU AI Act Annex III § 3β" },
  { termEL: "Προστασία δεδομένων από τον σχεδιασμό", termEN: "Data Protection by Design", acronym: "DPbD", definition: "Αρχή του GDPR (Άρ. 25): η προστασία δεδομένων πρέπει να ενσωματώνεται στον σχεδιασμό κάθε συστήματος, όχι ως εκ των υστέρων προσθήκη. Σημαντική για EdTech εργαλεία.", lawRef: "GDPR Άρ. 25" },

  /* === Σ === */
  { termEL: "Σύμβαση-Πλαίσιο Συμβουλίου Ευρώπης", termEN: "Council of Europe Framework Convention on AI", acronym: "CETS 225", definition: "Πρώτη νομικά δεσμευτική διεθνής συνθήκη για ΤΝ (2024). Υπεγράφη από ΕΕ, ΗΠΑ, ΗΒ. Απαιτεί risk assessments, μη διάκριση, διαφάνεια. Εφαρμόζεται οριζόντια (περιλαμβανομένης εκπαίδευσης).", lawRef: "CETS No. 225" },
  { termEL: "Σύσταση UNESCO", termEN: "UNESCO Recommendation on the Ethics of AI", acronym: "", definition: "Πρώτο παγκόσμιο ηθικό πλαίσιο AI (2021, 194 κράτη). Αρχές: μη βλάβη, δικαιοσύνη, ιδιωτικότητα, διαφάνεια, λογοδοσία. Η εκπαίδευση = 1 από 4 κεντρικά πεδία πολιτικής (Policy Area 5).", lawRef: "UNESCO Recommendation, 2021" },
  { termEL: "Σύστημα υψηλού κινδύνου", termEN: "High-Risk AI System", acronym: "", definition: "AI σύστημα που εμπίπτει στο Annex III του AI Act λόγω σημαντικού αντίκτυπου σε δικαιώματα. Στην εκπαίδευση: εισαγωγή, αξιολόγηση, κατάταξη, e-proctoring. Υπόκειται σε εκτεταμένες υποχρεώσεις.", lawRef: "EU AI Act Άρ. 6, Annex III" },
  { termEL: "Συγκατάθεση", termEN: "Consent", acronym: "", definition: "Μία από τις νόμιμες βάσεις GDPR (Άρ. 6§1α). Στην εκπαίδευση, η συγκατάθεση θεωρείται αμφισβητήσιμη λόγω σχέσης εξουσίας σχολείου-μαθητή (Αιτ. Σκέψη 43). Για ανήλικους <15 ετών στην Ελλάδα: γονική συγκατάθεση.", lawRef: "GDPR Άρ. 6§1α, 8 · Ν. 4624/2019 Άρ. 21" },

  /* === Τ === */
  { termEL: "Τεχνητή νοημοσύνη", termEN: "Artificial Intelligence", acronym: "AI / ΤΝ", definition: "Σύστημα βασισμένο σε μηχανή, σχεδιασμένο να λειτουργεί με μεταβλητούς βαθμούς αυτονομίας, που μπορεί να εμφανίζει προσαρμοστικότητα μετά την ανάπτυξη και παράγει εκροές (προβλέψεις, αποφάσεις, περιεχόμενο) για ρητούς ή σιωπηρούς σκοπούς.", lawRef: "EU AI Act Άρ. 3(1)" },
  { termEL: "Τεχνική τεκμηρίωση", termEN: "Technical Documentation", acronym: "", definition: "Υποχρέωση παρόχου high-risk AI (Άρ. 11 AI Act): λεπτομερής τεκμηρίωση σχεδιασμού, δεδομένων εκπαίδευσης, αλγορίθμου, ελέγχων, απόδοσης — για λόγους διαφάνειας και ελέγχου.", lawRef: "EU AI Act Άρ. 11" },

  /* === Υ === */
  { termEL: "Υπεύθυνος επεξεργασίας", termEN: "Data Controller", acronym: "", definition: "Το φυσικό ή νομικό πρόσωπο που καθορίζει σκοπούς και μέσα επεξεργασίας δεδομένων. Δημόσια σχολεία/ΑΕΙ = υπεύθυνοι επεξεργασίας. Φέρουν ευθύνη για GDPR συμμόρφωση.", lawRef: "GDPR Άρ. 4(7), 24-28" },
  { termEL: "Υπεύθυνος Προστασίας Δεδομένων", termEN: "Data Protection Officer", acronym: "DPO", definition: "Πρόσωπο που επιβλέπει τη συμμόρφωση με GDPR εντός οργανισμού. Υποχρεωτικός σε δημόσιους φορείς (δηλ. δημόσια σχολεία, ΑΕΙ). Αρμοδιότητες: συμβουλευτικές, ελεγκτικές, σημείο επαφής με ΑΠΔΠΧ.", lawRef: "GDPR Άρ. 37-39" },

  /* === Ψ === */
  { termEL: "Ψηφιακός γραμματισμός ΤΝ", termEN: "AI Literacy", acronym: "", definition: "Δεξιότητες, γνώσεις και κατανόηση που επιτρέπουν σε παρόχους, deployers και πληττόμενους να αξιοποιούν AI ενημερωμένα και να κατανοούν ευκαιρίες, κινδύνους, πιθανή βλάβη. Υποχρέωση από 2/2/2025 (Άρ. 4 AI Act).", lawRef: "EU AI Act Άρ. 3(56), 4" },
  { termEL: "Ψηφιακό χάσμα", termEN: "Digital Divide", acronym: "", definition: "Ανισότητα πρόσβασης σε ψηφιακές τεχνολογίες και δεξιότητες μεταξύ πληθυσμιακών ομάδων. Η Panagopoulou (2025) υποστηρίζει ότι η χρήση ΤΝ χωρίς αντίστοιχη εκπαίδευση δημιουργεί αντισυνταγματικό ψηφιακό χάσμα.", lawRef: "Σύνταγμα Άρ. 16§4, 5Α" },

  /* === ΑΚΡΩΝΥΜΙΑ (αγγλικά, σημαντικά) === */
  { termEL: "ΑΠΔΠΧ", termEN: "Hellenic Data Protection Authority (HDPA)", acronym: "ΑΠΔΠΧ / HDPA", definition: "Ανεξάρτητη Αρχή εποπτείας GDPR στην Ελλάδα. Αρμόδια για καταγγελίες, ελέγχους, πρόστιμα σχετικά με προστασία δεδομένων σε εκπαιδευτικά ιδρύματα.", lawRef: "Ν. 4624/2019" },
  { termEL: "ΕΕΒΤ", termEN: "National Commission for Bioethics and Technoethics", acronym: "ΕΕΒΤ", definition: "Εθνική Επιτροπή Βιοηθικής & Τεχνοηθικής. Εξέδωσε γνώμη (Μάρτιος 2025) για τις εφαρμογές ΤΝ στα ελληνικά σχολεία, με 8 θεμελιώδεις ηθικές αρχές.", lawRef: "Γνώμη ΕΕΒΤ 2025" },
  { termEL: "ΕΣΠΔ", termEN: "European Data Protection Board", acronym: "ΕΣΠΔ / EDPB", definition: "Ανεξάρτητο ευρωπαϊκό όργανο που εξασφαλίζει ομοιόμορφη εφαρμογή GDPR. Εκδίδει κατευθυντήριες γραμμές, γνώμες (π.χ. 28/2024 για AI & δεδομένα). Αποτελείται από τις εθνικές αρχές.", lawRef: "GDPR Άρ. 68-76" },
  { termEL: "ΙΕΠ", termEN: "Institute of Educational Policy", acronym: "ΙΕΠ / IEP", definition: "Ινστιτούτο Εκπαιδευτικής Πολιτικής. Αρμόδιο για curricula, επιμόρφωση, εκπαιδευτική πολιτική. Διαχειρίζεται πιλοτικό AI in Schools, στόχος 70.000 εκπαιδευτικοί σε AI literacy.", lawRef: "Ν. 3966/2011" },
  { termEL: "COPPA", termEN: "Children's Online Privacy Protection Act", acronym: "COPPA", definition: "Ομοσπονδιακός νόμος ΗΠΑ για προστασία online ιδιωτικότητας παιδιών κάτω των 13 ετών. Τροποποιημένος τον Ιανουάριο 2025 με αυστηρότερους κανόνες για AI εργαλεία.", lawRef: "COPPA (τροπ. 2025)" },
  { termEL: "FERPA", termEN: "Family Educational Rights and Privacy Act", acronym: "FERPA", definition: "Βασικός ομοσπονδιακός νόμος ΗΠΑ (1974) για προστασία δεδομένων μαθητών. Θεωρείται ξεπερασμένος για ΤΝ — δεν περιέχει AI-specific διατάξεις. Third-party AI: πιθανοί «school officials».", lawRef: "FERPA (1974)" },

  /* === Επιπλέον σημαντικοί όροι === */
  { termEL: "Αξιολόγηση συμμόρφωσης", termEN: "Conformity Assessment", acronym: "CA", definition: "Διαδικασία επαλήθευσης ότι ένα high-risk AI σύστημα πληροί τις απαιτήσεις του AI Act. Εκπαιδευτικά AI: εσωτερική αξιολόγηση (Annex VI). Για ΑΙ ενσωματωμένα σε ρυθμιζόμενα προϊόντα: μπορεί να απαιτηθεί τρίτος.", lawRef: "EU AI Act Άρ. 43, Annex VI" },
  { termEL: "Deployer (χρήστης AI)", termEN: "Deployer", acronym: "", definition: "Φυσικό ή νομικό πρόσωπο που χρησιμοποιεί AI σύστημα υπό τη δική του εξουσία (π.χ. σχολείο, πανεπιστήμιο). Φέρει υποχρεώσεις: χρήση σύμφωνα με οδηγίες, human oversight, ενημέρωση υποκειμένων, logs.", lawRef: "EU AI Act Άρ. 3(4), 26" },
  { termEL: "Generative AI / Παραγωγική ΤΝ", termEN: "Generative Artificial Intelligence", acronym: "GenAI", definition: "Κατηγορία ΤΝ ικανή να παράγει νέο περιεχόμενο (κείμενο, εικόνες, κώδικα) βάσει prompts. Στην εκπαίδευση: ChatGPT, Gemini, Claude. Εγείρει ζητήματα copyright, ακαδημαϊκής ακεραιότητας, δεδομένων.", lawRef: "EU AI Act Άρ. 51-56 (GPAI)" },
  { termEL: "Learning Analytics", termEN: "Learning Analytics", acronym: "LA", definition: "Μέτρηση, συλλογή, ανάλυση και αναφορά δεδομένων σχετικά με τους εκπαιδευόμενους και τα μαθησιακά τους περιβάλλοντα, με σκοπό τη βελτίωση της μάθησης. Αν αξιολογεί/καθοδηγεί → high-risk AI.", lawRef: "EU AI Act Annex III § 3β" },
  { termEL: "Intelligent Tutoring System", termEN: "Intelligent Tutoring System", acronym: "ITS", definition: "Εκπαιδευτικό σύστημα ΤΝ που παρέχει εξατομικευμένη διδασκαλία και ανατροφοδότηση, προσαρμόζοντας τη δυσκολία βάσει απόδοσης μαθητή. Ένα από τα πρωιμότερα πεδία AI in Education.", lawRef: "Holmes et al., 2019" },
  { termEL: "Opt-out (δικαίωμα εξαίρεσης)", termEN: "Opt-out", acronym: "", definition: "Δικαίωμα δικαιούχου πνευματικής ιδιοκτησίας να αρνηθεί τη χρήση έργων του σε TDM γενικού σκοπού (Άρ. 4§3 DSM). Ο AI Act (Άρ. 53) υποχρεώνει GPAI providers να σέβονται αυτά τα opt-outs.", lawRef: "Οδηγία DSM Άρ. 4§3 · AI Act Άρ. 53" },
  { termEL: "Risk management (Διαχείριση κινδύνου)", termEN: "Risk Management System", acronym: "RMS", definition: "Συνεχές, επαναληπτικό σύστημα εντοπισμού, ανάλυσης, αξιολόγησης και μετριασμού κινδύνων σε high-risk AI. Πρέπει να λειτουργεί σε ολόκληρο τον κύκλο ζωής του συστήματος (Άρ. 9 AI Act).", lawRef: "EU AI Act Άρ. 9" },
];

/* ============================================================
   ΛΟΓΙΚΗ ΓΛΩΣΣΑΡΙΟΥ — Αλφαβητική πλοήγηση, αναζήτηση, render
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Ταξινόμηση αλφαβητικά κατά ελληνικό όρο
  glossaryData.sort((a, b) => a.termEL.localeCompare(b.termEL, 'el'));

  let activeLetter = 'all';
  let searchQuery = '';

  const alphaNav = document.getElementById('glossary-alpha');
  const searchInput = document.getElementById('glossary-search');
  const resultsContainer = document.getElementById('glossary-results');
  const countEl = document.getElementById('glossary-count');

  // Δημιουργία αλφαβητικής πλοήγησης
  if (alphaNav) {
    // Εύρεση γραμμάτων που υπάρχουν
    const greekLetters = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ'.split('');
    const latinLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const allLetters = [...greekLetters, ...latinLetters];
    
    // Κουμπί "Όλα"
    let html = '<button class="active" data-letter="all">Όλα</button>';
    
    // Μόνο γράμματα που υπάρχουν στα δεδομένα
    const existingLetters = new Set();
    glossaryData.forEach(item => {
      const firstChar = item.termEL.charAt(0).toUpperCase();
      existingLetters.add(firstChar);
    });

    allLetters.forEach(letter => {
      if (existingLetters.has(letter)) {
        html += `<button data-letter="${letter}">${letter}</button>`;
      }
    });

    alphaNav.innerHTML = html;

    // Events
    alphaNav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        alphaNav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLetter = btn.dataset.letter;
        renderGlossary();
      });
    });
  }

  // Αναζήτηση
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      // Reset γράμμα σε "Όλα" κατά αναζήτηση
      if (searchQuery) {
        activeLetter = 'all';
        alphaNav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        alphaNav.querySelector('[data-letter="all"]').classList.add('active');
      }
      renderGlossary();
    });
  }

  // Αρχικό render
  renderGlossary();

  /* --- Φιλτράρισμα --- */
  function getFilteredGlossary() {
    return glossaryData.filter(item => {
      // Φίλτρο γράμματος
      if (activeLetter !== 'all') {
        const firstChar = item.termEL.charAt(0).toUpperCase();
        if (firstChar !== activeLetter) return false;
      }

      // Αναζήτηση
      if (searchQuery) {
        return searchInFields(item, ['termEL', 'termEN', 'acronym', 'definition', 'lawRef'], searchQuery);
      }
      return true;
    });
  }

  /* --- Rendering --- */
  function renderGlossary() {
    const data = getFilteredGlossary();
    countEl.textContent = data.length;

    if (data.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">Δεν βρέθηκαν όροι. Δοκιμάστε διαφορετική αναζήτηση ή γράμμα.</div>';
      return;
    }

    // Ομαδοποίηση κατά πρώτο γράμμα
    let currentLetter = '';
    let html = '';

    data.forEach(item => {
      const firstChar = item.termEL.charAt(0).toUpperCase();
      if (firstChar !== currentLetter) {
        currentLetter = firstChar;
        html += `<div style="margin-top:1.5rem;margin-bottom:0.5rem;">
          <span style="font-family:var(--font-display);font-size:1.5rem;font-weight:900;color:var(--gold);">${currentLetter}</span>
        </div>`;
      }

      html += `
        <div class="card card-accent" style="margin-bottom:0.6rem;padding:1.2rem 1.5rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.4rem;">
            <div>
              <span class="glossary-term">${escapeHTML(item.termEL)}</span>
              ${item.acronym ? `<span class="glossary-acronym" style="margin-left:0.5rem;">(${escapeHTML(item.acronym)})</span>` : ''}
            </div>
            <span class="glossary-en">${escapeHTML(item.termEN)}</span>
          </div>
          <p class="text-sm" style="margin-bottom:0.4rem;color:var(--text-secondary);">${escapeHTML(item.definition)}</p>
          ${item.lawRef ? `<span class="text-xs" style="color:var(--gold);">📌 ${escapeHTML(item.lawRef)}</span>` : ''}
        </div>`;
    });

    resultsContainer.innerHTML = html;
  }
});
