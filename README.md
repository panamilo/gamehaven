# GameHaven Πάτρα

Site για το GameHaven (28ης Οκτωβρίου 53Α, Πάτρα): TCG, επιτραπέζια, RPG και χώρος παιχνιδιού.

**Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript.** Χωρίς CMS: όλο το περιεχόμενο είναι σε αρχεία μέσα στο repo και το site βγαίνει πλήρως static.

## Τρέξιμο

```bash
npm install
npm run dev        # http://localhost:3001
```

## Πού αλλάζει τι

| Τι | Αρχείο |
| --- | --- |
| Εβδομαδιαίο πρόγραμμα | `src/content/schedule.ts` |
| Παιχνίδια, χρώματα, link εγγραφής σε τουρνουά | `src/content/games.ts` |
| Διεύθυνση, τηλέφωνο, social, ωράριο | `src/lib/site.ts` |
| Χρώματα και fonts | `src/app/(site)/globals.css` |

## Σελίδες

| Route | Τι είναι |
| --- | --- |
| `/` | Hero, εβδομαδιαίο πρόγραμμα, χώρος, παιχνίδια, ωράριο |
| `/schedule` | Πρόγραμμα εβδομάδας και links εγγραφής ανά παιχνίδι |
| `/games` | Τι παίζουμε, ανά κατηγορία |
| `/space` | Ο χώρος και κρατήσεις για πάρτι/ομάδες |
| `/contact` | Στοιχεία, ωράριο, χάρτης |

Κάθε παιχνίδι στο πρόγραμμα που έχει `register` στο `games.ts` ανοίγει την πλατφόρμα τουρνουά του (Play Riftbound, Bandai TCG+, Play! Pokémon, Wizards Locator, Yu-Gi-Oh!). Όσα δεν έχουν (D&D, Unmatched) οδηγούν στο `/games`, με σημείωση «δηλώσεις στο μαγαζί».
