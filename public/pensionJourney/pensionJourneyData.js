export const pensionJourneyData = [
    {
      id: 1,
      title: "Information gathering:",
      listItems: [
        "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
        "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
        "Discussed client concerns and specific areas of focus for the audit.",
      ],
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
      title: "Automated Testing:",
      listItems: [
        "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
        "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
        "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.",
      ],
    },
    {
      id: 5,
      title: "Reporting & Remediation:",
      listItems: [
        "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
        "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
        "Collaborated with the CDP team to prioritize and address the identified issues.",
        "Conducted additional verification testing after vulnerability fixes were implemented.",
      ],
    },
  ];

export  const manualCodeReview = [
    {
      id: 1,
      title: "Vulnerability identification: ",
      content:
        "Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues, etc.",
    },
    {
      id: 2,
      title: "Logic flaws: ",
      content:
        "Identifying inconsistencies or unintended behaviours in the code logic.",
    },
    {
      id: 3,
      title: "Tokenomics correctness:",
      content:
        "Verifying if the code accurately implements the intended economic model and token distribution mechanisms.",
    },
    {
      id: 4,
      title: "Solidity best practices: ",
      content:
        "Compliance with secure coding standards and adherence to established guidelines.",
    },
  ];

export  const FunctionalTesting = [
    {
      id: 1,
      content:
        "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
    },
    {
      id: 2,
      content:
        "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
    },
    {
      id: 3,
      content:
        "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
    },
    {
      id: 4,
      content:
        "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.",
    },
  ];