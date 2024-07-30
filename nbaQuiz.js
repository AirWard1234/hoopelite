let nbaQuizCanvas = document.getElementById('quizGameCanvas');
let nbaStartButton = document.getElementById('startQuizButton');
let startText = document.getElementById('startText');
let startBoxL = document.getElementById('boxl');
let startBoxR = document.getElementById('boxr');
let startCover = document.getElementById('start');
let homeScreen = document.getElementById('homeScreenSelect');
let backButton = document.getElementById('back');
let backFinal = document.getElementById('backFinal');
let difficutlySelect = document.getElementById('difficultySelectContainer');
let decadeScreen = document.getElementById('homeScreenSelect')
let decadeSelect = document.getElementById('decadesContainer');
let decade6080s = document.getElementById('decade6080s');
let decade8000s = document.getElementById('decade8000s');
let decade0010s = document.getElementById('decade0010s');
let decade1020s = document.getElementById('decade1020s');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let questionDisplay = document.getElementById('questionDisplay');
let selectedDecade;
let selectedDifficulty;
let gameSettings;
let questionPage = document.getElementById('questionPage');
let questionOne = document.getElementById('questionOne');
let questionTwo = document.getElementById('questionTwo');
let questionThree = document.getElementById('questionThree');
let questionFour = document.getElementById('questionFour');
let questionOneE = document.getElementById('questionOneE');
let questionTwoE = document.getElementById('questionTwoE');
let questionThreeE = document.getElementById('questionThreeE');
let questionFourE = document.getElementById('questionFourE');
let questionTitle = document.getElementById('questionTitle');
let submitButton = document.getElementById('submit');
let submitText = document.getElementById('submitText');
let gameOverScreen = document.getElementById('gameOver');
let selectedAnswer = false;
let scoreDisplay = document.getElementById('scoreNumber');
let questionImage = document.getElementById('question__Image')
let score = 0;
let answerR;
let questions = {
  decade1: {
    "easy": [
      "Who was the legendary center for the Boston Celtics during the 1960s?",
      "Which team won the most NBA championships in the 1960s",
      "Who was known as 'Mr. Clutch' for his incredible performance in pressure situations?",
      "Which player scored 100 points in a single game in 1962?",
      "Which team was known as the 'Showtime Lakers'?",
      "Which player was nicknamed 'Magic' and played for the Los Angeles Lakers in the 1980s?",
      "Who was the famous small forward for the Boston Celtics, known for his shooting skills?",
      "Who was the star player for the Chicago Bulls who won the NBA Rookie of the Year award in 1985?",
      "Which player was able to amass 6 MVPs during between the 60s and 80s",
      "One of the greatest dunkers of all time, known for his athletic nature; played in the ABA aswell"
    ],
    "medium": [
      "Which team did Wilt Chamberlain play for when he scored his record-setting 100 points in a single game?",
      "What was the nickname the late 80s Detroit Pistons had due to their physical and agressive nature?",
      "When was Michael Jordan drafted and what pick was he drafted as?",
      "The player with the most assists and a very common figure in 'best passer debates' is:",
      "Which player was nicknamed 'the Worm' and was known for his odd antics and questionable off-court personality?",
      "This player was a center for the Buffalo Bruins and has 1 MVP:",
      "Walt Frazier is most nototious for his time on the:",
      "Nate 'Tiny' Archibald led the league in which statistical categories in 1972-73:",
      "Who was the second and only other person to receive an MVP while being a rookie after Wilt Chamberlain?",
      "Pete Maravich holds what record in the NCAA basketball league?",
    ],

    "hard": [
      "Who was the first player in NBA history to score 50 points in a playoff game?",
      "Which team did the Boston Celtics defeat in the 1969 NBA Finals to win their 11th championship?",
      "Who was the head coach of the Los Angeles Lakers during most of the 1960s?",
      "Which player famously broke the NBA color barrier when he signed with the Boston Celtics in 1950?",
      "In what year did the NBA expand to include teams outside of the original 8 franchises?",
      "Which player was known as 'Mr. Inside' and played alongside 'Mr. Outside' for the Minneapolis Lakers in the 1950s?",
      "Who was the first player in NBA history to win the Finals MVP award?",
      "Which team won the NBA championship in 1966 by defeating the Los Angeles Lakers?",
      "What was the name of the professional basketball league that rivaled the NBA during the early 1960s?",
      "Which player was known for his infamous punch that ended the career of Rudy LaRusso during a game in 1965?"
    ]

  },
  decade2: {
    "easy": [
      "Who won the NBA championship eight times in the 1980s?",
      "Which team drafted Patrick Ewing as the first overall pick in the 1985 NBA Draft?",
      "Which player won three consecutive NBA MVP awards in the late 1980s?",
      "Who was known as 'The Mailman' for his consistent scoring and toughness?",
      "Which team won the NBA championship in 1983, led by their center known as 'Doctor J'?",
      "Which player was known for his 'Skyhook' shot and played for the Los Angeles Lakers?",
      "Who was the point guard for the Detroit Pistons during their 'Bad Boys' era?",
      "Which team won their first NBA championship in 1991, led by Michael Jordan?",
      "Which player was drafted by the Orlando Magic as the first overall pick in the 1992 NBA Draft?",
      "Who won the NBA scoring title seven times between 1987 and 1998?"
    ],
    "medium": [
      "Which team did Michael Jordan defeat in his first NBA Finals appearance in 1991?",
      "Who won the NBA MVP award in the 1993-94 season while playing for the Houston Rockets?",
      "Which player famously led the Detroit Pistons to back-to-back NBA championships in 1989 and 1990?",
      "Who was the head coach of the Chicago Bulls during their six NBA championship wins in the 1990s?",
      "Which team did Shaquille O'Neal start his NBA career with after being drafted in 1992?",
      "Which player won the NBA Rookie of the Year award in 1993 and became one of the most dominant centers in the 1990s?",
      "Who won the NBA MVP award in the 1999-2000 season while playing for the Los Angeles Lakers?",
      "Which team won three consecutive NBA championships from 1991 to 1993?",
      "Which player was known for his three-point shooting and played for the Indiana Pacers in the late 1990s?",
      "Who won the NBA Finals MVP award in 1995 while leading the Houston Rockets to victory?"
    ],
    "hard": [
      "Which team did the Chicago Bulls defeat in the 1992 NBA Finals to win their second consecutive championship?",
      "Who was the first player to win the NBA MVP award after joining a new team in the 1990s?",
      "Which player won the NBA scoring title four times between 1995 and 1998?",
      "Who was the coach of the San Antonio Spurs during their first NBA championship in 1999?",
      "Which team won the NBA championship in 1982, led by their center known as 'The Dream'?",
      "Who was the first overall pick in the 1984 NBA Draft, famously known as 'The Admiral'?",
      "Which player won the NBA MVP award in back-to-back seasons in 1993 and 1994?",
      "Who was the Finals MVP for the Detroit Pistons when they won their first NBA championship in 1989?",
      "Which team did Hakeem Olajuwon lead to back-to-back NBA championships in 1994 and 1995?",
      "Who won the NBA Defensive Player of the Year award three times between 1986 and 1989?"
    ]
  },
  decade3: {
    "easy": [
      "Which team won three consecutive NBA championships from 2000 to 2002?",
      "Who won the NBA MVP award in 2001 while playing for the Philadelphia 76ers?",
      "Which player won the NBA scoring title seven times between 2000 and 2008?",
      "Who was known as 'Big Fundamental' and won three NBA championships with the San Antonio Spurs in the 2000s?",
      "Which team drafted LeBron James as the first overall pick in the 2003 NBA Draft?",
      "Which player won the NBA Rookie of the Year award in 2004 while playing for the Cleveland Cavaliers?",
      "Who won the NBA Finals MVP award in 2004 while leading the Detroit Pistons to victory?",
      "Which team won their first NBA championship in 2008, led by their 'Big Three' of Paul Pierce, Kevin Garnett, and Ray Allen?",
      "Who was the head coach of the Los Angeles Lakers during their back-to-back NBA championships in 2009 and 2010?",
      "Which player scored 81 points in a single game against the Toronto Raptors in 2006, the second-highest single-game scoring performance in NBA history?"
    ],

    "medium": [
      "Who was the first overall pick in the 2004 NBA Draft, known for his dominance as a center?",
      "Which team did the Los Angeles Lakers defeat in the 2000 NBA Finals to win their first championship of the 2000s?",
      "Who won the NBA MVP award in 2008 while playing for the Los Angeles Lakers?",
      "Which player led the Miami Heat to their first NBA championship in 2006?",
      "Who was the Finals MVP for the San Antonio Spurs when they won the NBA championship in 2005?",
      "Which team did the Boston Celtics defeat in the 2008 NBA Finals to win their 17th championship?",
      "Who won the NBA Defensive Player of the Year award in 2004 and 2005?",
      "Which player won the NBA MVP award in back-to-back seasons in 2005 and 2006?",
      "Who was the coach of the Detroit Pistons during their NBA championship win in 2004?",
      "Which team did the Dallas Mavericks defeat in the 2006 NBA Finals to win their first championship?"
    ],

    "hard": [
      "Which player won the NBA scoring title four times between 2005 and 2008?",
      "Who was the first player to win the NBA MVP award after joining a new team in the 2000s?",
      "Which team did the San Antonio Spurs defeat in the 2007 NBA Finals to win their fourth championship?",
      "Who was the coach of the Miami Heat during their NBA championship win in 2006?",
      "Which player won the NBA Finals MVP award in 2002 while leading the Los Angeles Lakers to victory?",
      "Who won the NBA Coach of the Year award in 2001 and 2002 while coaching the Sacramento Kings?",
      "Which team won the NBA championship in 2009, led by their 'Big Three' of Kobe Bryant, Pau Gasol, and Lamar Odom?",
      "Who was the first overall pick in the 2001 NBA Draft, known for his dynamic scoring ability?",
      "Which player won the NBA Sixth Man of the Year award in 2009 while playing for the Dallas Mavericks?",
      "Who was the head coach of the Boston Celtics during their NBA championship win in 2008?"
    ]
  },
  decade4: {
    "easy": [
      "Which team won two NBA championships in the early 2010s with their 'Big Three' of LeBron James, Dwyane Wade, and Chris Bosh?",
      "Who won the NBA MVP award in 2011 while playing for the Chicago Bulls?",
      "Which player won the NBA scoring title in the 2013-2014 season with an average of 32.0 points per game?",
      "Who was the head coach of the Golden State Warriors during their NBA championship win in 2015?",
      "Which team did the Dallas Mavericks defeat in the 2011 NBA Finals to win their first championship?",
      "Who was the first overall pick in the 2012 NBA Draft, known for his explosive athleticism?",
      "Who won the NBA Finals MVP award in 2011 while leading the Dallas Mavericks to victory?",
      "Which player won the NBA Defensive Player of the Year award in 2012, 2013, and 2014?",
      "Which team set a record for most wins in a regular season with 73 victories in the 2015-2016 NBA season?",
      "Who won the NBA Rookie of the Year award in 2018 while playing for the Philadelphia 76ers?"
    ],
    "medium": [
      "Who hit the iconic game-winning shot in Game 7 of the 2016 NBA Finals to lead the Cleveland Cavaliers to their first championship?",
      "Which player won back-to-back NBA MVP awards in 2015 and 2016 while playing for the Golden State Warriors?",
      "Which team won consecutive NBA championships in 2017 and 2018 with their 'Splash Brothers' duo?",
      "Who was the first overall pick in the 2017 NBA Draft, known for his versatile playing style?",
      "Which player led the Toronto Raptors to their first NBA championship in 2019 and won the Finals MVP award?",
      "Who won the NBA Coach of the Year award in 2011 and 2012 while coaching the Chicago Bulls?",
      "Which team did the Miami Heat defeat in the 2012 NBA Finals to win their first championship?",
      "Who was the head coach of the Cleveland Cavaliers during their NBA championship win in 2016?",
      "Which player won the NBA Sixth Man of the Year award in 2014 while playing for the San Antonio Spurs?",
      "Who won the NBA Most Improved Player award in 2017 while playing for the Milwaukee Bucks?"
    ],
    "hard": [
      "Which player won the NBA scoring title in 2020 with an average of 34.3 points per game?",
      "Who won the NBA MVP award in 2017 and 2018 while playing for the Oklahoma City Thunder?",
      "Which team did the Toronto Raptors defeat in the 2020 NBA Finals to win their second championship?",
      "Who was the head coach of the Los Angeles Lakers during their NBA championship win in 2020?",
      "Which player won the NBA Finals MVP award in 2012 while leading the Miami Heat to victory?",
      "Who won the NBA Executive of the Year award in 2015 and 2019 while working for the Toronto Raptors?",
      "Which team set a record for the longest winning streak in NBA history with 27 consecutive wins in the 2012-2013 season?",
      "Who was the first overall pick in the 2013 NBA Draft, known for his sharpshooting abilities?",
      "Which player won the NBA Defensive Player of the Year award in 2015 and 2016?",
      "Who won the NBA Sportsmanship Award in 2018 and 2019?"
    ]
  }
}
let answers = {
  decade1: {
    "easy": [1, 1, 3, 4, 1, 2, 3, 4, 4],
    "medium": [1, 2, 1, 4, 3, 3, 1, 3, 1, 2],
    "hard": [1, 2, 2, 3, 1, 1, 1, 4, 3, 1]
  },
  decade2: {
    "easy": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "medium": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "hard": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  decade3: {
    "easy": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "medium": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "hard": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  decade4: {
    "easy": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "medium": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "hard": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }
};
let options = {
  decade1: {
    "easy": [
      ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Kwame Brown"],
      ["Celtics", "Maple Leafs", "Atlanta Hawks", "Lakers"],
      ["John Havilck", "LA Clippers", "Jerry West", "Bob Cousy"],
      ["Wes Unseld", "Michael Jordan", "Shaun Livingston", "Wilt Chamberlain"],
      ["Los Angeles Lakers", "Boston Celtics", "San Francisco Warriors", "Buffalo Braves"],
      ["Larry Legend", "Bill Walton", "Magic Johnson", "Rick Barry"],
      ["Malik Beasly", "Larry Bird", "Dave Cowens", "Hakeem Olajuwan"],
      ["Lebron James", "The GOAT", "Jeffrey Jordan", "Michael Jordan"],
      ["Shaquille O'neal", "Wilt Chamberlain", "Donte Exum", "Kareem Abdul-Jabbar"],
      ["Julius Erving", "Rick Barry", "Moses Malone", "Joel Embiid"]
      ,
    ],
    "medium": [
      ["Philadelphia Warrior", "Portland Trailblazers", "Dallas Mavericks", "Los Angeles Lakers"],
      ["Good Boys Pistons", "Bad Boys Pistons", "Detroit Savages", "Piston Pollimer"],
      ["1984; 3rd", "1985; 2nd", "1988; 1st", "1991; 6th"],
      ["Nate Archibald", "Steve Nash", "Magic Johnson", "John Stockton"],
      ["Bill Lambeer", "Michael Jordan", "Dennis Rodman", "Isiah Thomas"],
      ["Bill Russel", "Moses Malone", "Bob Macadoo", "Dave Cowens"],
      ["New York Knicks", "Los Angeles Lakers", "Boston Celtics", "Chicago Bulls"],
      ["Points and Rebounds", "Assists and Steals", "Points and Assists", "Rebounds and Steals"],
      ["Wes Unseld", "Wilt Chamberlain", "Kevin Garnett", "Donte Exum"],
      ["All Time Leader in Points Per Game", "All Time Points Leader", "Most Titles", "Least Turnovers "],
    ],
    "hard": [
      ["Rick Barry", "Bob Cousy", "Bill Russell", "Dave Cowens"],
      ["Portland Trailblazers", "Los Angeles Lakers", "Boston Celtics", "Chicago Bulls"],
      ["Tom Thibodeau", "Fred Shaus", "Michael Jordan", "Bill Russell"],
      ["John Havilcek", "Bill Russell", "Chuck Cooper", "Wilt Chamberlain"],
      ["1938", "1967", "1982", "1974"],
      ["Elgin Baylor", "Michael Jordan", "Dennis Rodman", "Isiah Thomas"],
      ["Jerry West", "Bob Cousy", "Bill Russell", "Dave Cowens"],
      ["Toronto Raptors", "Washington Wizards", "Seatle Supersonics", "Boston Celtics"],
      ["NBL", "ABA", "ABL", "NBA"],
      ["Kermit Washington", "Latrell Sprewell", "Jerry West", "Draymond Green"]
    ]

  },
  decade2: {
    "easy": [
      ["Los Angeles Lakers", "Boston Celtics", "Detroit Pistons", "Chicago Bulls"],
      ["New York Knicks", "Boston Celtics", "Los Angeles Lakers", "Chicago Bulls"],
      ["Larry Bird", "Magic Johnson", "Michael Jordan", "Karl Malone"],
      ["Karl Malone", "Charles Barkley", "David Robinson", "Patrick Ewing"],
      ["Philadelphia 76ers", "Los Angeles Lakers", "Boston Celtics", "Houston Rockets"],
      ["Kareem Abdul-Jabbar", "Magic Johnson", "Shaquille O'Neal", "James Worthy"],
      ["Isiah Thomas", "Joe Dumars", "Bill Laimbeer", "Dennis Rodman"],
      ["Chicago Bulls", "Los Angeles Lakers", "Detroit Pistons", "Boston Celtics"],
      ["Shaquille O'Neal", "Alonzo Mourning", "Christian Laettner", "Jimmy Jackson"],
      ["Michael Jordan", "Karl Malone", "Dominique Wilkins", "Hakeem Olajuwon"]
    ],
    "medium": [
      ["Los Angeles Lakers", "Portland Trail Blazers", "Phoenix Suns", "Seattle SuperSonics"],
      ["Hakeem Olajuwon", "David Robinson", "Charles Barkley", "Patrick Ewing"],
      ["Isiah Thomas", "Joe Dumars", "Dennis Rodman", "Bill Laimbeer"],
      ["Phil Jackson", "Pat Riley", "Chuck Daly", "Larry Brown"],
      ["Orlando Magic", "Los Angeles Lakers", "Miami Heat", "Phoenix Suns"],
      ["Shaquille O'Neal", "Alonzo Mourning", "Chris Webber", "David Robinson"],
      ["Shaquille O'Neal", "Kobe Bryant", "Tim Duncan", "Kevin Garnett"],
      ["Chicago Bulls", "Houston Rockets", "Los Angeles Lakers", "San Antonio Spurs"],
      ["Reggie Miller", "Chris Mullin", "Mark Jackson", "Jalen Rose"],
      ["Hakeem Olajuwon", "Clyde Drexler", "Robert Horry", "Sam Cassell"]
    ],
    "hard": [
      ["Portland Trail Blazers", "Los Angeles Lakers", "Phoenix Suns", "Utah Jazz"],
      ["Charles Barkley", "Shaquille O'Neal", "Hakeem Olajuwon", "Karl Malone"],
      ["Michael Jordan", "Allen Iverson", "Kobe Bryant", "Shaquille O'Neal"],
      ["Gregg Popovich", "Phil Jackson", "Pat Riley", "Larry Brown"],
      ["Los Angeles Lakers", "Boston Celtics", "Philadelphia 76ers", "Houston Rockets"],
      ["Hakeem Olajuwon", "Patrick Ewing", "David Robinson", "Charles Barkley"],
      ["Hakeem Olajuwon", "Michael Jordan", "Karl Malone", "David Robinson"],
      ["Isiah Thomas", "Joe Dumars", "Bill Laimbeer", "Dennis Rodman"],
      ["Houston Rockets", "Chicago Bulls", "San Antonio Spurs", "Los Angeles Lakers"],
      ["Dennis Rodman", "Dikembe Mutombo", "David Robinson", "Gary Payton"]
    ]
  },
  decade3: {
    "easy": [
      ["Los Angeles Lakers", "Chicago Bulls", "San Antonio Spurs", "Miami Heat"],
      ["Allen Iverson", "Shaquille O'Neal", "Tim Duncan", "Kevin Garnett"],
      ["Kobe Bryant", "Allen Iverson", "Tracy McGrady", "Kevin Durant"],
      ["Tim Duncan", "Shaquille O'Neal", "Dirk Nowitzki", "Kevin Garnett"],
      ["Cleveland Cavaliers", "Miami Heat", "Chicago Bulls", "Boston Celtics"],
      ["LeBron James", "Carmelo Anthony", "Dwyane Wade", "Chris Bosh"],
      ["Chauncey Billups", "Ben Wallace", "Richard Hamilton", "Rasheed Wallace"],
      ["Boston Celtics", "Los Angeles Lakers", "Miami Heat", "San Antonio Spurs"],
      ["Phil Jackson", "Pat Riley", "Gregg Popovich", "Doc Rivers"],
      ["Kobe Bryant", "LeBron James", "Michael Jordan", "Shaquille O'Neal"]
    ],

    "medium": [
      ["Dwight Howard", "LeBron James", "Carmelo Anthony", "Chris Bosh"],
      ["Indiana Pacers", "Philadelphia 76ers", "New Jersey Nets", "Sacramento Kings"],
      ["Kobe Bryant", "LeBron James", "Kevin Garnett", "Tim Duncan"],
      ["Dwyane Wade", "Shaquille O'Neal", "LeBron James", "Chris Bosh"],
      ["Tim Duncan", "Manu Ginobili", "Tony Parker", "Bruce Bowen"],
      ["Los Angeles Lakers", "Miami Heat", "Detroit Pistons", "Houston Rockets"],
      ["Ben Wallace", "Ron Artest", "Kevin Garnett", "Dwight Howard"],
      ["Steve Nash", "Kobe Bryant", "LeBron James", "Tim Duncan"],
      ["Larry Brown", "Phil Jackson", "Gregg Popovich", "Pat Riley"],
      ["Miami Heat", "San Antonio Spurs", "Phoenix Suns", "Los Angeles Lakers"],
    ],

    "hard": [
      ["Kobe Bryant", "LeBron James", "Allen Iverson", "Kevin Durant"],
      ["Shaquille O'Neal", "Kevin Garnett", "Steve Nash", "LeBron James"],
      ["Cleveland Cavaliers", "Miami Heat", "Detroit Pistons", "Boston Celtics"],
      ["Pat Riley", "Erik Spoelstra", "Stan Van Gundy", "Jeff Van Gundy"],
      ["Kobe Bryant", "Shaquille O'Neal", "Derek Fisher", "Robert Horry"],
      ["Phil Jackson", "Rick Adelman", "Gregg Popovich", "Larry Brown"],
      ["Los Angeles Lakers", "Boston Celtics", "San Antonio Spurs", "Miami Heat"],
      ["Kwame Brown", "Tyson Chandler", "Pau Gasol", "LeBron James"],
      ["Jason Terry", "Manu Ginobili", "Jamal Crawford", "Lamar Odom"],
      ["Doc Rivers", "Phil Jackson", "Gregg Popovich", "Pat Riley"]
    ]
  },
  decade4: {
    "easy": [
      ["Miami Heat", "San Antonio Spurs", "Dallas Mavericks", "Boston Celtics"],
      ["Derrick Rose", "LeBron James", "Kevin Durant", "Russell Westbrook"],
      ["Kevin Durant", "Carmelo Anthony", "James Harden", "Stephen Curry"],
      ["Steve Kerr", "Mark Jackson", "Gregg Popovich", "Phil Jackson"],
      ["Miami Heat", "San Antonio Spurs", "Los Angeles Lakers", "Boston Celtics"],
      ["Anthony Davis", "Damian Lillard", "Bradley Beal", "Michael Kidd-Gilchrist"],
      ["Dirk Nowitzki", "Jason Terry", "Shawn Marion", "Tyson Chandler"],
      ["Dwight Howard", "Serge Ibaka", "Marc Gasol", "Kawhi Leonard"],
      ["Golden State Warriors", "Chicago Bulls", "San Antonio Spurs", "Los Angeles Lakers"],
      ["Ben Simmons", "Donovan Mitchell", "Jayson Tatum", "Lonzo Ball"]
    ],
    "medium": [
      ["Kyrie Irving", "LeBron James", "Kevin Love", "J.R. Smith"],
      ["Stephen Curry", "LeBron James", "Kevin Durant", "Russell Westbrook"],
      ["Golden State Warriors", "Cleveland Cavaliers", "San Antonio Spurs", "Toronto Raptors"],
      ["Markelle Fultz", "Lonzo Ball", "Jayson Tatum", "De'Aaron Fox"],
      ["Kawhi Leonard", "Kyle Lowry", "Pascal Siakam", "Serge Ibaka"],
      ["Tom Thibodeau", "Gregg Popovich", "Erik Spoelstra", "Doc Rivers"],
      ["Oklahoma City Thunder", "San Antonio Spurs", "Boston Celtics", "Dallas Mavericks"],
      ["Tyronn Lue", "David Blatt", "Mike Brown", "Larry Drew"],
      ["Manu Ginobili", "Lou Williams", "Jamal Crawford", "Patty Mills"],
      ["Giannis Antetokounmpo", "Khris Middleton", "Jabari Parker", "Malcolm Brogdon"]
    ],
    "hard": [
      ["James Harden", "Damian Lillard", "Bradley Beal", "Giannis Antetokounmpo"],
      ["Russell Westbrook", "Kevin Durant", "LeBron James", "James Harden"],
      ["Miami Heat", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics"],
      ["Frank Vogel", "Steve Kerr", "Gregg Popovich", "Erik Spoelstra"],
      ["LeBron James", "Dwyane Wade", "Chris Bosh", "Kevin Durant"],
      ["Masai Ujiri", "Danny Ainge", "Sam Presti", "Rob Pelinka"],
      ["Miami Heat", "Golden State Warriors", "Chicago Bulls", "Los Angeles Lakers"],
      ["Anthony Bennett", "Andrew Wiggins", "Joel Embiid", "Giannis Antetokounmpo"],
      ["Kawhi Leonard", "Draymond Green", "Rudy Gobert", "Dwight Howard"],
      ["Mike Conley", "Stephen Curry", "Chris Paul", "Dirk Nowitzki"]
    ]
  }
}
let images = {
  decade1: {
    "easy": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJL8WlIo4kDy1i7jhG5t_5nF8E75xp2YwcA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtIJJAdU0O4TnaqG_2-4v06AX51BAU_kDQQ&s",
      "https://i.pinimg.com/originals/3d/e7/8f/3de78f36dbf39692dc622b240ea2b7ff.jpg",
      "https://img.bleacherreport.net/img/images/photos/002/780/942/4e99edcf959c5743a660a70c378fbc0f_crop_north.jpg?1393784512&w=3072&h=2048",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxq0EN_MfzUD6PyMm9L5sGyXK8Chm3NjeqA&s",
      "https://news.cgtn.com/news/3355544d3341444f3063444d78516a4d3067444f31457a6333566d54/img/fb4f73d6dc79437087ab2e9e250d0a9c/fb4f73d6dc79437087ab2e9e250d0a9c.jpg",
      "https://bostoncelticshistory.com/wp-content/uploads/2021/08/1738371_10-768x512.jpeg",
      "https://fadeawayworld.net/.image/t_share/MTk1MzYzODgxOTIzNjUwODc0/323354566_1340312456734647_6667927316511722455_n.png", "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_781%2Cy_1084/MTkzNjcyNzQ3OTQ2MDkyMDE2/usatsi_11837317_168397759_lowres.jpg",
      "https://thumbor.bigedition.com/img/V1VD_KXHjhNqrQQFnLuaEQCmU7k=/800x800/filters:quality(80)/granite-web-prod/f9/5e/f95ed3d647ff466f9742db18f1d94e5c.jpeg"
    ],
    "medium": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTEIr8WE2Ar0O2_0KErAR1MpbFvnSxllwjw&s",
      "https://fivethirtyeight.com/wp-content/uploads/2014/04/241700.jpg?w=575",
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-20213-nba1800fixed-1403208574.jpg",
      "https://qph.cf2.quoracdn.net/main-qimg-68ff9c120082e4c45f1c3a3107949602-pjlq",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHMgy-IpA34_i8JQ7pPjf0iWSMYW85ovqiPXkcTZ3oMsZtLkAvrjpgBPEcY6WQwQA2dGw3RcYT-V7b6NkQISizI3ckyCPbKIczeMNmn2i1R3evk0JBB5_jlenB7b0PPWKb7t2TZEun9OA/s1600/Michael-Jordan-Scottie-Pippen-and-Dennis-Rodman-of-the-Chicago-Bulls-in-Chicago-1997-wallpaper.jpg",
      "https://cdn.nba.com/manage/2013/09/bob-mcadoo-iso-looks.jpg",
      "https://cdn.nba.com/manage/2021/08/frazier-legends-prof.jpg",
      "https://cdn.nba.com/manage/2021/08/archibald-pass-1976-scaled-e1629657545495.jpeg",
      "https://cdn.vox-cdn.com/thumbor/w57KIMvdCG5BOpNoXbvyMMrsmhU=/0x697:2430x3600/1200x800/filters:focal(678x878:1066x1266)/cdn.vox-cdn.com/uploads/chorus_image/image/66886649/923872282.jpg.0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiFiztToMLbHHXektksO06mAqFtYSOCd4PQ&s",
    ],
    "hard": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg5Vei-RHwhIHC8CMSAStQgeUQOG7vXiXXQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8L8tWCFgkv_RNprxu9_ILxUc48oLqHlWPIQ&s",
      "https://static01.nyt.com/images/2010/02/14/sports/14schaus_CA0/14schaus_CA0-popup.jpg?quality=75&auto=webp&disable=upscale",
      "https://andscape.com/wp-content/uploads/2019/04/Chuck-Cooper-e1554593826821.jpg?w=633",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/NBAABAmerger.png/800px-NBAABAmerger.png",
      "https://cdn.nba.com/manage/2021/09/GettyImages-86279739-1-1568x882.jpg",
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/AP22132148474143-copy.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5fPW0PXNOE_8NXHl5JaDPOHkPKFZymZMpg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtJHexOYo902Vy95uY0NqtcjZShWNnrlZRA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yzSQTX_pWrkJG70s00lLCVon38cNKrh-4A&s"
    ]

  },
  decade2: {
    "easy": [
      "https://cdn.nba.com/manage/2021/08/GettyImages-51439621.jpg",
      "https://i.ytimg.com/vi/2JsPaHGJh0w/maxresdefault.jpg",
      "https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0NDE1MzY1MjM5ODc1MjQ5/nba-mvp-trophy.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlP8UVp5_WW7sWx6UuKvFpyJkiMJLvhK0CGA&s",
      "https://cdn.nba.com/manage/2021/08/GettyImages-83453727.jpg",
      "https://people.com/thmb/wdW5htq1U-k2FIYzB3MixtVGoxw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(854x149:856x151)/Kareem-Abdul-Jabbar-1-e467dd92f08c40b9b15b52949a348755.jpg",
      "https://cdn.vox-cdn.com/thumbor/QoBv7zeTSNtsL3eRPc3nxHbWiMo=/0x380:3299x2579/1400x1400/filters:focal(0x380:3299x2579):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/28830959/80566483.0.jpg",     "https://news.cgtn.com/news/3355544d3341444f3063444d78516a4d3067444f31457a6333566d54/img/fb4f73d6dc79437087ab2e9e250d0a9c/fb4f73d6dc79437087ab2e9e250d0a9c.jpg",
      "https://staticg.sportskeeda.com/editor/2023/07/969a2-16887085952585-1920.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdij5AyPTWgrdb4KWGSj6OeamoyHT_-LtOw&s"
    ],
    "medium": [
      "https://cdn.nba.com/teams/legacy/z.cdn.turner.com/dr/nba/teamsites/release/bulls/sites/bulls/files/team1991_110302.jpg",
      "https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0NDE1MzY1MjM5ODc1MjQ5/nba-mvp-trophy.jpg",
      "https://cdn.vox-cdn.com/thumbor/QoBv7zeTSNtsL3eRPc3nxHbWiMo=/0x380:3299x2579/1400x1400/filters:focal(0x380:3299x2579):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/28830959/80566483.0.jpg",
      "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/phil-jackson-head-coach-of-the-chicago-bulls-dynasty-of-the-1990s_ux1ytfd9mn531qw3lqlfhagj9.jpeg?itok=HNNYpQ_W",
      "https://www.ocregister.com/wp-content/uploads/migration/od5/od5pcr-b88792070z.120160907160030000grrimm1o.10.jpg?w=620",
      "https://www.ocregister.com/wp-content/uploads/migration/od5/od5pcr-b88792070z.120160907160030000grrimm1o.10.jpg?w=620",
      "https://www.ocregister.com/wp-content/uploads/migration/od5/od5pcr-b88792070z.120160907160030000grrimm1o.10.jpg?w=620",
      "https://www.ocregister.com/wp-content/uploads/migration/od5/od5pcr-b88792070z.120160907160030000grrimm1o.10.jpg?w=620",
      "https://www.indystar.com/gcdn/presto/2019/06/01/PIND/5ca70b5d-4839-407f-a717-278f46e7eb97-AP_9406010356.jpg?crop=1996,1123,x1,y576&width=1996&height=1123&format=pjpg&auto=webp",
      "https://pbs.twimg.com/media/E6y3xshXIAAmj3Q?format=jpg&name=large"
    ],
    "hard": [
      "Which team did the Chicago Bulls defeat in the 1992 NBA Finals to win their second consecutive championship?",
      "Who was the first player to win the NBA MVP award after joining a new team in the 1990s?",
      "Which player won the NBA scoring title four times between 1995 and 1998?",
      "Who was the coach of the San Antonio Spurs during their first NBA championship in 1999?",
      "Which team won the NBA championship in 1982, led by their center known as 'The Dream'?",
      "Who was the first overall pick in the 1984 NBA Draft, famously known as 'The Admiral'?",
      "Which player won the NBA MVP award in back-to-back seasons in 1993 and 1994?",
      "Who was the Finals MVP for the Detroit Pistons when they won their first NBA championship in 1989?",
      "Which team did Hakeem Olajuwon lead to back-to-back NBA championships in 1994 and 1995?",
      "Who won the NBA Defensive Player of the Year award three times between 1986 and 1989?"
    ]
  },
  decade3: {
    "easy": [
      "Which team won three consecutive NBA championships from 2000 to 2002?",
      "Who won the NBA MVP award in 2001 while playing for the Philadelphia 76ers?",
      "Which player won the NBA scoring title seven times between 2000 and 2008?",
      "Who was known as 'Big Fundamental' and won three NBA championships with the San Antonio Spurs in the 2000s?",
      "Which team drafted LeBron James as the first overall pick in the 2003 NBA Draft?",
      "Which player won the NBA Rookie of the Year award in 2004 while playing for the Cleveland Cavaliers?",
      "Who won the NBA Finals MVP award in 2004 while leading the Detroit Pistons to victory?",
      "Which team won their first NBA championship in 2008, led by their 'Big Three' of Paul Pierce, Kevin Garnett, and Ray Allen?",
      "Who was the head coach of the Los Angeles Lakers during their back-to-back NBA championships in 2009 and 2010?",
      "Which player scored 81 points in a single game against the Toronto Raptors in 2006, the second-highest single-game scoring performance in NBA history?"
    ],

    "medium": [
      "Who was the first overall pick in the 2004 NBA Draft, known for his dominance as a center?",
      "Which team did the Los Angeles Lakers defeat in the 2000 NBA Finals to win their first championship of the 2000s?",
      "Who won the NBA MVP award in 2008 while playing for the Los Angeles Lakers?",
      "Which player led the Miami Heat to their first NBA championship in 2006?",
      "Who was the Finals MVP for the San Antonio Spurs when they won the NBA championship in 2005?",
      "Which team did the Boston Celtics defeat in the 2008 NBA Finals to win their 17th championship?",
      "Who won the NBA Defensive Player of the Year award in 2004 and 2005?",
      "Which player won the NBA MVP award in back-to-back seasons in 2005 and 2006?",
      "Who was the coach of the Detroit Pistons during their NBA championship win in 2004?",
      "Which team did the Dallas Mavericks defeat in the 2006 NBA Finals to win their first championship?"
    ],

    "hard": [
      "Which player won the NBA scoring title four times between 2005 and 2008?",
      "Who was the first player to win the NBA MVP award after joining a new team in the 2000s?",
      "Which team did the San Antonio Spurs defeat in the 2007 NBA Finals to win their fourth championship?",
      "Who was the coach of the Miami Heat during their NBA championship win in 2006?",
      "Which player won the NBA Finals MVP award in 2002 while leading the Los Angeles Lakers to victory?",
      "Who won the NBA Coach of the Year award in 2001 and 2002 while coaching the Sacramento Kings?",
      "Which team won the NBA championship in 2009, led by their 'Big Three' of Kobe Bryant, Pau Gasol, and Lamar Odom?",
      "Who was the first overall pick in the 2001 NBA Draft, known for his dynamic scoring ability?",
      "Which player won the NBA Sixth Man of the Year award in 2009 while playing for the Dallas Mavericks?",
      "Who was the head coach of the Boston Celtics during their NBA championship win in 2008?"
    ]
  },
  decade4: {
    "easy": [
      "Which team won two NBA championships in the early 2010s with their 'Big Three' of LeBron James, Dwyane Wade, and Chris Bosh?",
      "Who won the NBA MVP award in 2011 while playing for the Chicago Bulls?",
      "Which player won the NBA scoring title in the 2013-2014 season with an average of 32.0 points per game?",
      "Who was the head coach of the Golden State Warriors during their NBA championship win in 2015?",
      "Which team did the Dallas Mavericks defeat in the 2011 NBA Finals to win their first championship?",
      "Who was the first overall pick in the 2012 NBA Draft, known for his explosive athleticism?",
      "Who won the NBA Finals MVP award in 2011 while leading the Dallas Mavericks to victory?",
      "Which player won the NBA Defensive Player of the Year award in 2012, 2013, and 2014?",
      "Which team set a record for most wins in a regular season with 73 victories in the 2015-2016 NBA season?",
      "Who won the NBA Rookie of the Year award in 2018 while playing for the Philadelphia 76ers?"
    ],
    "medium": [
      "Who hit the iconic game-winning shot in Game 7 of the 2016 NBA Finals to lead the Cleveland Cavaliers to their first championship?",
      "Which player won back-to-back NBA MVP awards in 2015 and 2016 while playing for the Golden State Warriors?",
      "Which team won consecutive NBA championships in 2017 and 2018 with their 'Splash Brothers' duo?",
      "Who was the first overall pick in the 2017 NBA Draft, known for his versatile playing style?",
      "Which player led the Toronto Raptors to their first NBA championship in 2019 and won the Finals MVP award?",
      "Who won the NBA Coach of the Year award in 2011 and 2012 while coaching the Chicago Bulls?",
      "Which team did the Miami Heat defeat in the 2012 NBA Finals to win their first championship?",
      "Who was the head coach of the Cleveland Cavaliers during their NBA championship win in 2016?",
      "Which player won the NBA Sixth Man of the Year award in 2014 while playing for the San Antonio Spurs?",
      "Who won the NBA Most Improved Player award in 2017 while playing for the Milwaukee Bucks?"
    ],
    "hard": [
      "Which player won the NBA scoring title in 2020 with an average of 34.3 points per game?",
      "Who won the NBA MVP award in 2017 and 2018 while playing for the Oklahoma City Thunder?",
      "Which team did the Toronto Raptors defeat in the 2020 NBA Finals to win their second championship?",
      "Who was the head coach of the Los Angeles Lakers during their NBA championship win in 2020?",
      "Which player won the NBA Finals MVP award in 2012 while leading the Miami Heat to victory?",
      "Who won the NBA Executive of the Year award in 2015 and 2019 while working for the Toronto Raptors?",
      "Which team set a record for the longest winning streak in NBA history with 27 consecutive wins in the 2012-2013 season?",
      "Who was the first overall pick in the 2013 NBA Draft, known for his sharpshooting abilities?",
      "Which player won the NBA Defensive Player of the Year award in 2015 and 2016?",
      "Who won the NBA Sportsmanship Award in 2018 and 2019?"
    ]
  }
}
start.addEventListener("mouseover", function() {
  boxl.style.transform = "translateX(-150%)"
  boxr.style.transform = "translateX(150%)"
  startText.style.display = 'none';
})
start.addEventListener("mouseleave", function() {
  boxl.style.transform = "translateX(-50%)"
  boxr.style.transform = "translateX(50%)"
  setTimeout(() => startText.style.display = 'block', 1000)
})

function nbaQuizGame() {
  startCover.style.display = 'none';
  homeScreen.style.display = 'flex';
  function updatePage(previous, current) {
    gameSettings = {
      decade: selectedDecade,
      difficulty: selectedDifficulty
    }
    previous.style.display = 'none';
    current.style.display = 'flex';
    return gameSettings
  }
  function updateCountDown(count) {
    countDown.innerHTML = `<h2>${count}</h2>`;
    if (count >= 1) {
      setTimeout(() => updateCountDown(count - 1), 1000);
    }
    if (count == 0) {
      questionDisplay.style.display = 'none';
      questionPage.style.display = 'flex';
    }
  }
  function gameRun(gameSettings, questions, answers, options) {
    let questionRotationArray = questions[gameSettings.decade][gameSettings.difficulty]
    let answerRotationArray = answers[gameSettings.decade][gameSettings.difficulty]
    let optionsRotationArray = options[gameSettings.decade][gameSettings.difficulty]
    let imagesRotationArray = images[gameSettings.decade][gameSettings.difficulty]
    console.log(questionRotationArray, answerRotationArray, optionsRotationArray);
    let questionOrder = [];
    var optionOrder = [];
    function randomGenWithinRange(array, newArray) {
      let i = 0;
      let randomNumber = 0;

      while (i < array.length) {
        randomNumber = Math.floor(Math.random() * array.length);
        while (newArray.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * array.length);
        }
        newArray.push(randomNumber);
        i++;
      }

      return newArray;
    }
    function clearAnswer() {
      for (let z = 0; z < questionArray.length; z++) {
        questionArray[z].style.transform = 'translateY(0%)';
        questionArray[z].style.boxShadow = '#5cdb95 0px 7px 0px 0px'
      }
    }
    function displayQuestion(count) {
      submitText.innerHTML = "Select an Answer";
      randomGenWithinRange(optionsRotationArray[count], optionOrder)
      window.optionOrder = optionOrder;
      questionTitle.innerHTML = `<h2>${questionRotationArray[questionOrder[count]]}<h2>`;
      console.log("_______________")
      console.log(questionRotationArray[questionOrder[count]])
      console.log(optionsRotationArray[questionOrder[count]][0])
      console.log(optionOrder)
      questionImage.src = imagesRotationArray[questionOrder[count]];
      questionOne.innerHTML = `<h2>${optionsRotationArray[questionOrder[count]][optionOrder[0]]}<h2>`;
      questionTwo.innerHTML = `<h2>${optionsRotationArray[questionOrder[count]][optionOrder[1]]}<h2>`;
      questionThree.innerHTML = `<h2>${optionsRotationArray[questionOrder[count]][optionOrder[2]]}<h2>`;
      questionFour.innerHTML = `<h2>${optionsRotationArray[questionOrder[count]][optionOrder[3]]}<h2>`;
      optionOrder = [];
      selectedAnswer = false
      count++
      return count
    }
    let questionArray = [questionOneE, questionTwoE, questionThreeE, questionFourE]
    function checkAnswer(count, element) {
      clearAnswer();
      element.style.transform = 'translateY(10%)';
      element.style.boxShadow = '#4fbd80 0px 14px 0px 0px';
      console.log("question checking:", questionRotationArray[questionOrder[count - 1]], "answer checking:", window.optionOrder[selectedAnswer - 1] + 1, "answer is:", answerRotationArray[questionOrder[count - 1]])
      if (answerRotationArray[questionOrder[count - 1]] == window.optionOrder[selectedAnswer - 1] + 1) {
        answerR = true;
        score++
      } else {
        answerR = false;
      }

      return answerR
    }
    function submitRedGreen() {
      if (answerR === true) {
        submitText.innerHTML = `<h2>Correct!<h2>`
      } else {
        submitText.innerHTML = `<h2>Incorrect!<h2>`
      }
    }
    function gameEnd() {
      questionPage.style.display = 'none';
      gameOverScreen.style.display = 'flex';
      console.log(score)
      scoreDisplay.innerHTML = `<h2>${score}</h2>`
      q = 0
    }
    randomGenWithinRange(questionRotationArray, questionOrder)
    let q = 0;
    q = displayQuestion(q);
    questionOneE.addEventListener('click', function() {
      console.log(optionOrder)
      selectedAnswer = 1;
      answerR = checkAnswer(q, questionOneE)
    })
    questionTwoE.addEventListener('click', function() {
      selectedAnswer = 2;
      answerR = checkAnswer(q, questionTwoE)
    })
    questionThreeE.addEventListener('click', function() {
      selectedAnswer = 3;
      answerR = checkAnswer(q, questionThreeE)
    })
    questionFourE.addEventListener('click', function() {
      selectedAnswer = 4;
      answerR = checkAnswer(q, questionFourE)
    })

    submitButton.addEventListener('click', function() {
      clearAnswer();
      console.log(selectedAnswer)
      if (!submitButton.disabled) {
        submitButton.disabled = true;
        if (selectedAnswer) {
          if (q < 10) {
            submitRedGreen();
            setTimeout(() => {
              q = displayQuestion(q);
              submitButton.disabled = false;
            }, 500);

          } else {
            gameEnd();
          }
        } else {
          alert('Please select an answer');
          submitButton.disabled = false;
        }
      }
    });


  }

  let currentElement = homeScreen
  let previousElement = nbaStartButton;
  back.addEventListener('click', function() {
    currentElement.style.display = 'none';
    previousElement.style.display = 'flex';
  })
  backFinal.addEventListener('click', function() {
    gameOverScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
  })
  currentElement = difficutlySelect;
  previousElement = decadeScreen;
  decade6080s.addEventListener('click', function() {
    selectedDecade = "decade1";
    currentElement = difficutlySelect;
    previousElement = decadeScreen;
    updatePage(previousElement, currentElement);
  })
  decade8000s.addEventListener('click', function() {
    selectedDecade = "decade2";
    currentElement = difficutlySelect;
    previousElement = decadeScreen;
    updatePage(previousElement, currentElement);
  })
  decade0010s.addEventListener('click', function() {
    selectedDecade = "decade3";
    currentElement = difficutlySelect;
    previousElement = decadeScreen;
    updatePage(previousElement, currentElement);
  })
  decade1020s.addEventListener('click', function() {
    selectedDecade = "decade4";
    currentElement = difficutlySelect;
    previousElement = decadeScreen;
    updatePage(previousElement, currentElement);
  })

  easy.addEventListener('click', function() {
    currentElement = questionDisplay
    previousElement = difficutlySelect;
    selectedDifficulty = "easy";
    updatePage(previousElement, currentElement);
    console.log(gameSettings)
    updateCountDown(3)
    gameRun(gameSettings, questions, answers, options)
  })
  medium.addEventListener('click', function() {
    currentElement = questionDisplay
    previousElement = difficutlySelect;
    selectedDifficulty = "medium";
    updatePage(previousElement, currentElement);
    console.log(gameSettings)
    updateCountDown(3)
    gameRun(gameSettings, questions, answers, options)
  })
  hard.addEventListener('click', function() {
    currentElement = questionDisplay
    previousElement = difficutlySelect;
    selectedDifficulty = "hard";
    updatePage(previousElement, currentElement);
    console.log(gameSettings)
    updateCountDown(3)
    gameRun(gameSettings, questions, answers, options)
  })




}