const helper = {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  timeAgo: (date) => {
    const toPhilippineTime = (date) => {
      // Convert date to Philippine Time (Asia/Manila)
      return new Date(
        new Date(date).toLocaleString("en-US", { timeZone: "Asia/Manila" })
      );
    };

    const pastDate = toPhilippineTime(date);
    const currentDate = toPhilippineTime(new Date());

    const diff = currentDate - pastDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  },
  colorExtractor: (color) => {
    let textColor = "#fff";
    switch (color) {
      case "Off White":
        return {
          color: "#F5F4F1",
          textColor: "#0e0e0e",
        };
      case "Jet Black":
        return {
          color: "#0e0e0e",
          textColor: "#fff",
        };
      case "Black":
        return {
          color: "#000",
          textColor: "#fff",
        };
      default:
        return {
          color: "#0e0e0e",
          textColor: textColor,
        };
    }
  },

  isOdd: (number) => {
    return number % 2 === 0 ? false : true;
  },

  formatResponseText: (plainText) => {
    // Convert plain text into formatted sections with HTML tags
    let formattedText = "";
    const lines = plainText.split("\n");

    lines.forEach((line) => {
      if (line.trim() === "") return; // Skip empty lines

      // Check for headings using keywords or specific markers
      if (line.includes("**")) {
        // Replace ** with <strong> for bold sections
        const boldText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        formattedText += `<h3 class=\"font-bold text-lg my-2\">${boldText}</h3>\n`;
      } else if (line.includes("*")) {
        // Replace * with <em> for italicized text
        const italicText = line.replace(/\*(.*?)\*/g, "<em>$1</em>");
        formattedText += `<p class=\"text-base mb-2\">${italicText}</p>\n`;
      } else {
        // Regular paragraph text
        formattedText += `<p class=\"text-base mb-2\">${line}</p>\n`;
      }
    });

    return formattedText;
  },
};

export default helper;
