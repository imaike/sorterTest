(function(SETTINGS, undefined) {
  "use strict";

  SETTINGS.getSettings = function() {
    var settingsObject = {
      columnWidth: 120,
      cardHeight: 120,
      qSortPattern: [2, 3, 4, 5, 5, 5, 4, 3, 2],
      qSortHeaders: ["N4", "N3", "N2", "N1", 0, 1, 2, 3, 4],
      qSortHeaderNumbers: ["-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4"],
      forcedSorts: true,
      horiCardMinHeight: 100,
      headerColorsArray: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      postSortColumnDisplay: {
        high: ["column4"],
        middle: ["column0"],
        low: ["columnN4"]
      }
    };
    return settingsObject;
  };

  SETTINGS.getStatements = function() {
    var statementList = [
      {
        id: "s1",
        divColor: "notSet",
        statement: "1. We accept improvements in status and power of lower class"
      },
      {
        id: "s2",
        divColor: "notSet",
        statement: "2. All men expected to try to improve selves"
      },
      {
        id: "s3",
        divColor: "notSet",
        statement: "3. Success in life by a previously deprived person is resented"
      },
      {
        id: "s4",
        divColor: "notSet",
        statement: "4. Men can expect fair treatment according to merit"
      },
      {
        id: "s5",
        divColor: "notSet",
        statement: "5. Lower-class not revolutionary"
      },
      {
        id: "s6",
        divColor: "notSet",
        statement: "6. Political goals relatively moderate, even conservative"
      },
      {
        id: "s7",
        divColor: "notSet",
        statement: "7. Those born to high place in society should retain it"
      },
      {
        id: "s8",
        divColor: "notSet",
        statement: "8. Person with wealth deserves place in high society"
      },
      {
        id: "s9",
        divColor: "notSet",
        statement: "9. We try to eliminate privileged classes"
      },
      {
        id: "s10",
        divColor: "notSet",
        statement: "10. We accept aristocratic-type titles and other honors"
      },
      {
        id: "s11",
        divColor: "notSet",
        statement: "11. The government has its secrets, this is generally accepted"
      },
      {
        id: "s12",
        divColor: "notSet",
        statement: "12. Emphasis on publicity in political matters: no secrets"
      },
      {
        id: "s13",
        divColor: "notSet",
        statement: "13. Encouraged to think of ourselves as competing for success"
      },
      {
        id: "s14",
        divColor: "notSet",
        statement: "14. Social status equated with manner of speech"
      },
      {
        id: "s15",
        divColor: "notSet",
        statement: "15. We take law into our own hands, mob action and vigilantes"
      },
      {
        id: "s16",
        divColor: "notSet",
        statement: "16. Close ties to Mother Country, as Britain still is for many"
      },
      {
        id: "s17",
        divColor: "notSet",
        statement: "17. We prefer companionship and helping hand"
      },
      {
        id: "s18",
        divColor: "notSet",
        statement: "18. Some disdain for acquiring wealth for its own sake"
      },
      {
        id: "s19",
        divColor: "notSet",
        statement: "19. High value placed on protecting and promoting underdog"
      },
      {
        id: "s20",
        divColor: "notSet",
        statement: "20. We like the idea of a welfare state"
      },
      {
        id: "s21",
        divColor: "notSet",
        statement: "21. We value the race for success"
      },
      {
        id: "s22",
        divColor: "notSet",
        statement: "22. Corrupt means of achieving success are accepted"
      },
      {
        id: "s23",
        divColor: "notSet",
        statement: "23. One law for the rich, another for the poor"
      },
      {
        id: "s24",
        divColor: "notSet",
        statement: "24. Lack of respect for the police, and law enforcement"
      },
      {
        id: "s25",
        divColor: "notSet",
        statement: "25. Trust in police has sunk deeply into our national character"
      },
      {
        id: "s26",
        divColor: "notSet",
        statement: "26. Worth of a man is judged by what he is, not by education"
      },
      {
        id: "s27",
        divColor: "notSet",
        statement: "27. Deep respect for the rich, the educated, the social elite"
      },
      {
        id: "s28",
        divColor: "notSet",
        statement: "28. We are tolerant of popular opinion, don&#39;t like extremes"
      },
      {
        id: "s29",
        divColor: "notSet",
        statement: "29. Poor on earth will enjoy higher status in after-life"
      },
      {
        id: "s30",
        divColor: "notSet",
        statement: "30. Respect for civil liberties and minority rights"
      },
      {
        id: "s31",
        divColor: "notSet",
        statement: "31. Virtue tends to be its own reward"
      },
      {
        id: "s32",
        divColor: "notSet",
        statement: "32. Position of depressed classes must be raised"
      },
      {
        id: "s33",
        divColor: "notSet",
        statement: "33. Emphasis is on getting ahead"
      }
    ];
    return statementList;
  };
})((window.SETTINGS = window.SETTINGS || {}));
