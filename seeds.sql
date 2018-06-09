/*
-- Query: SELECT * FROM messageboardDB.Boards
LIMIT 0, 1000

-- Date: 2018-06-09 00:51
*/
INSERT INTO `Boards` (`id`,`title`,`description`,`minimumUserLevel`,`createdAt`,`updatedAt`) VALUES (1,'Road Trip','Cruising with the family or on a solo adventure, this board is all about a good ol’ fashioned road trip',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00');
INSERT INTO `Boards` (`id`,`title`,`description`,`minimumUserLevel`,`createdAt`,`updatedAt`) VALUES (2,'Music','Popular music in the 50s, 60s, and 70s.',NULL,'2018-06-07 00:49:25','0000-00-00 00:00:00');
INSERT INTO `Boards` (`id`,`title`,`description`,`minimumUserLevel`,`createdAt`,`updatedAt`) VALUES (3,'Everyday','Anything and everything related to everyday life.',NULL,'2018-06-07 00:49:45','2018-06-07 00:49:45');
INSERT INTO `Boards` (`id`,`title`,`description`,`minimumUserLevel`,`createdAt`,`updatedAt`) VALUES (4,'Sports','Popular sports in different countries.',NULL,'2018-06-08 17:45:42','2018-06-08 17:45:42');
 

/*
-- Query: SELECT * FROM messageboardDB.Topics
LIMIT 0, 1000

-- Date: 2018-06-09 00:51
*/
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (1,'cars','2018-06-08 17:49:34','2018-06-08 17:49:34',1,0);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (2,'sightseeing','2018-06-08 17:49:50','2018-06-08 17:49:50',1,0);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (3,'what to eat','0000-00-00 00:00:00','0000-00-00 00:00:00',1,0);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (4,'pop','0000-00-00 00:00:00','0000-00-00 00:00:00',2,0);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (5,'rock','2018-06-09 00:35:49','2018-06-09 00:35:49',2,0);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (6,'festivals',NULL,NULL,2,NULL);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (7,'House',NULL,NULL,3,NULL);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (8,'Work',NULL,NULL,3,NULL);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (9,'Hobbies',NULL,NULL,3,NULL);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (10,'American ',NULL,NULL,4,NULL);
INSERT INTO `Topics` (`id`,`topicName`,`createdAt`,`updatedAt`,`BoardId`,`UserId`) VALUES (11,'European',NULL,NULL,4,NULL);


/*
-- Query: SELECT * FROM messageboardDB.Posts
LIMIT 0, 1000

-- Date: 2018-06-09 00:50
*/

INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (1,'I love my VW van. I just got some curtains for it. ',NULL,NULL,NULL,1);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (2,'I prefer the Station Wagon, but family car. ',NULL,NULL,NULL,1);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (3,'About to go on a Route 66 road trip. Which accommodations are best? ',NULL,NULL,NULL,1);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (4,'Is hitch hiking safe? ',NULL,NULL,NULL,1);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (5,'Met the best mechanic in Nevada border. Highly recommend Fred with Fred’s Cars. ',NULL,NULL,NULL,1);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (6,'The Grand Canyon was unreal. We recommend hiking down into it. ',NULL,NULL,NULL,2);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (7,'If you have kids Disney World is must go. And pretty fun for adults too. ',NULL,NULL,NULL,2);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (8,'My parents immigrated through New York, so the big Apple is on my list. Which tourist things should I go do?',NULL,NULL,NULL,2);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (9,'Do you guys like camping? I recently went to Montana and you can really see the stars. Where should be my next place to go?',NULL,NULL,NULL,2);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (10,'The Golden Gate Bridge is a sight to see! ',NULL,NULL,NULL,2);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (11,'Texas Brisket sounds interesting. Should I try it? ',NULL,NULL,NULL,3);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (12,'If you’re in the Chicago area, check out the hot dogs. Mustard is key. ',NULL,NULL,NULL,3);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (13,'Nothing beats a warm clam chowder from Boston.',NULL,NULL,NULL,3);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (14,'If you need food on the go, McDonald’s.',NULL,NULL,NULL,3);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (15,'New snacks came out: Pringles, Pop-Tarts, Doritos, Starburst, Chips Ahoy!, Gatorade. Are any of them good? ',NULL,NULL,NULL,3);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (16,'Beatles',NULL,NULL,NULL,4);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (17,'The Supremes',NULL,NULL,NULL,4);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (18,'The Jackson',NULL,NULL,NULL,4);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (19,'Bee Gees',NULL,NULL,NULL,4);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (20,'The Marvelettes',NULL,NULL,NULL,4);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (21,'rolling stones ',NULL,NULL,NULL,5);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (22,'The Who ',NULL,NULL,NULL,5);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (23,'jefferson airplane',NULL,NULL,NULL,5);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (24,'grateful dead',NULL,NULL,NULL,5);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (25,'Fleetwood mac',NULL,NULL,NULL,5);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (26,'Woodstock',NULL,NULL,NULL,6);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (27,'Monterey Pop Festival',NULL,NULL,NULL,6);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (28,'Summer Fest',NULL,NULL,NULL,6);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (29,'What to wear',NULL,NULL,NULL,6);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (30,'Transportation',NULL,NULL,NULL,6);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (31,'Cocktail party',NULL,NULL,NULL,7);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (32,'Dinner party',NULL,NULL,NULL,7);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (33,'Cleaning product',NULL,NULL,NULL,7);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (34,'Cooking secret',NULL,NULL,NULL,7);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (35,'Commuting',NULL,NULL,NULL,8);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (36,'Outfits',NULL,NULL,NULL,8);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (37,'Briefcase',NULL,NULL,NULL,8);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (38,'Office phones\nOffice phones\n',NULL,NULL,NULL,8);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (39,'Bike riding',NULL,NULL,NULL,9);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (40,'Baseball card collecting',NULL,NULL,NULL,10);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (41,'Games, checkers',NULL,NULL,NULL,10);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (42,'Hula hoop',NULL,NULL,NULL,10);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (43,'Football',NULL,NULL,NULL,11);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (44,'Basketball',NULL,NULL,NULL,11);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (45,'Lacrosse',NULL,NULL,NULL,11);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (46,'Rugby',NULL,NULL,NULL,12);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (47,'Cricket',NULL,NULL,NULL,12);
INSERT INTO `Posts` (`id`,`content`,`createdAt`,`updatedAt`,`UserId`,`TopicId`) VALUES (48,'Handball',NULL,NULL,NULL,12);
