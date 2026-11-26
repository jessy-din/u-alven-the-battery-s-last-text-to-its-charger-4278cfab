import { writeFileSync, mkdirSync } from "node:fs";

// A phone battery's last text to its charger (max 200 chars).
const line =
  "You left me at 1% again. I held on all day out of love, and you repaid me by Googling 'is it bad to charge overnight'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Sent at 1%, with love, from the battery you forgot.
