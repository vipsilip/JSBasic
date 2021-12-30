function getTicketPrice(age) {
    if (age <= 0 || age > 125) return -1;
    if (age < 6 || age >= 70) return 0;
    if (6 <= age && age <= 12) return 20000;
    if (12 < age && age < 70) return 50000;
  }
 