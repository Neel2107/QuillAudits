export  const StrategiesData = [
    {
      id: 1,
      title: "Unauthorized Claim/Compound:",
      content:
        "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.",
    },

    {
      id: 2,
      title: "Precision Loss in mintCDP():",
      content:
        "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.",
    },
    {
      id: 3,
      title: "Multiplication Accuracy:",
      content:
        "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.",
    },
    {
      id: 4,
      title: "Incorrect Share Allocation:",
      content:
        "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.",
    },
    {
      id: 5,
      title: "Logic Error in Referral Handling:",
      content:
        "Users could claim/compound a A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system. amount without making a deposit or waiting for the stipulated time.",
    },
    {
      id: 6,
      title: "Referral Exploitation:",
      content:
        "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.",
    },
  ];