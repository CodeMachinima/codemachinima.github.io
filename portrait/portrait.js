function setup() {
createCanvas(600, 600);
background(255, 128, 128);
}


function draw() {
noStroke();
//Shirt
fill(82, 81, 80);
quad(620, 494, 366, 414, 177, 406, -26, 467);
quad(620, 494, 630, 621, -22, 609, -26, 467);

//Neck
fill(196, 146, 110);
quad(352, 478, 384, 329, 205, 385, 178, 405);
quad(285, 500, 224, 468, 186, 428, 185, 399);
quad(185, 399, 286, 501, 377, 483, 366, 416);

//Face
fill(217, 161, 121);
ellipse(280, 237, 240, 361);
ellipse(255, 155, 256, 198);
rotate(100)
ellipse(60, 380, 175, 265);
rotate(-100)

//Light
fill(232, 172, 130)
beginShape();
vertex(367, 200);
vertex(346, 221);
vertex(349, 242);
vertex(334, 274);
vertex(359, 286);
vertex(335, 312);
vertex(311, 343);
vertex(284, 379);
vertex(257, 393);
vertex(298, 369);
vertex(321, 365);
vertex(307, 388);
vertex(272, 411);
vertex(262, 415);
vertex(306, 413);
vertex(339, 394);
vertex(358, 372);
vertex(365, 362);
vertex(355, 396);
vertex(350, 418);
vertex(335, 457);
vertex(327, 493);
vertex(377, 482);
vertex(366, 413);
vertex(383, 327);
vertex(396, 281);
vertex(387, 192);
vertex(366, 199);
vertex(348, 175);
vertex(329, 146);
vertex(320, 141);
vertex(337, 184);
vertex(347, 204);
endShape();

//First Chin
fill(163,120,90);
beginShape();
vertex(284, 376);
vertex(264, 390);
vertex(248, 390);
vertex(230, 393);
vertex(216, 393);
vertex(205, 386);
vertex(192, 372);
vertex(206, 382);
vertex(224, 389);
vertex(265, 384);
vertex(290, 370);
endShape();

//Double Chin
beginShape();
vertex(240, 410);
vertex(255, 412);
vertex(274, 413);
vertex(302, 409);
vertex(318, 405);
vertex(308, 412);
vertex(294, 417);
vertex(283, 419);
vertex(262, 417);
vertex(243, 411);
endShape();

//Nose
fill(196,145,108)
beginShape()
vertex(234, 238);
vertex(240, 278);
vertex(236, 288);
vertex(231, 284);
vertex(229, 272);
vertex(214, 269);
vertex(208, 276);
vertex(200, 279);
vertex(194, 283);
vertex(191, 276);
vertex(180, 274);
vertex(180, 280);
vertex(174, 280);
vertex(174, 268);
vertex(185, 253);
vertex(199, 234);
vertex(203, 217);
vertex(196, 208);
vertex(193, 195);
vertex(182, 180);
endShape()

//Hair
fill(0, 0, 0);
quad(129, 189, 120, 60, 163, 99, 134, 190);
quad(115, 37, 163, 102, 296, 98, 356, 29);
quad(114, 36, 241, 1, 356, 30, 280, 44);
quad(297, 93, 345, 42, 401, 188, 365, 198);
quad(357, 30, 398, 95, 400, 188, 342, 42);
quad(178, 194, 182, 180, 142, 184, 144, 197);
quad(206, 178, 281, 155, 287, 178, 215, 194);

//Lips
fill(148, 114, 70);
quad(179, 340, 190, 323, 205, 329, 207, 335);
quad(206, 336, 205, 329, 226, 319, 256, 331);
quad(192, 350, 185, 335, 252, 330, 236, 349);

//Nostrils
fill(82, 63, 38);
quad(180, 281, 181, 274, 190, 277, 195, 284);
quad(208, 278, 214, 269, 228, 273, 232, 283);

//Ears
fill(232, 172, 130);
ellipse(405, 230, 56, 102);

//Inside Ears (1)
fill(87, 64, 49);
beginShape();
vertex(395, 190);
vertex(392, 199);
vertex(392, 211);
vertex(393, 223);
vertex(403, 233);
vertex(396, 244);
vertex(396, 255);
vertex(402, 257);
vertex(409, 254);
vertex(413, 265);
vertex(420, 258);
vertex(423, 249);
vertex(426, 236);
vertex(425, 220);
vertex(424, 211);
vertex(422, 200);
vertex(417, 192);
vertex(406, 186);
vertex(396, 190);
endShape();

//Inside Ears(2)
fill(176,132,102)
beginShape()
vertex(392, 204);
vertex(394, 192);
vertex(400, 188);
vertex(409, 202);
vertex(411, 217);
vertex(415, 234);
vertex(406, 251);
vertex(406, 243);
vertex(409, 237);
vertex(411, 228);
vertex(407, 218);
vertex(402, 208);
endShape()

//Eyes
fill(255, 255, 255);
ellipse(173, 213, 46, 14);
ellipse(277, 203, 46, 14);

//Pupils
fill(0, 0, 0);
ellipse(159,213,19,12);
ellipse(263,203,19,12);

//Haircut
fill(255, 128, 128);
beginShape();
vertex(124, 181);
vertex(134, 173);
vertex(124, 166);
vertex(137, 155);
vertex(113, 154);
vertex(136, 151);
vertex(118, 147);
vertex(130, 143);
vertex(110, 141);
vertex(132, 133);
vertex(111, 133);
vertex(138, 124);
vertex(121, 126);
vertex(138, 120);
vertex(114, 124);
vertex(135, 116);
vertex(116, 118);
vertex(133, 107);
vertex(109, 111);
vertex(133, 97);
vertex(107, 98);
vertex(144, 91);
vertex(112, 92);
vertex(132, 84);
vertex(109, 79);
vertex(128, 74);
vertex(102, 61);
vertex(129, 72);
vertex(106, 51);
endShape();
beginShape();
vertex(116, 32);
vertex(148, 68);
vertex(124, 27);
vertex(142, 50);
vertex(140, 22);
vertex(153, 47);
vertex(152, 13);
vertex(162, 48);
vertex(160, 18);
vertex(181, 53);
vertex(169, 17);
vertex(182, 63);
vertex(176, 12);
vertex(183, 38);
vertex(189, 10);
vertex(199, 36);
vertex(202, 8);
vertex(208, 30);
vertex(214, 2);
vertex(219, 27);
vertex(219, 4);
vertex(227, 38);
vertex(229, 3);
vertex(233, 43);
vertex(234, 1);
vertex(240, 22);
vertex(245, 5);
vertex(249, 30);
vertex(255, 4);
vertex(262, 35);
vertex(271, 4);
vertex(272, 35);
vertex(273, 6);
vertex(277, 29);
vertex(290, 27);
vertex(303, 14);
vertex(302, 27);
vertex(320, 17);
vertex(328, 28);
vertex(335, 22);
vertex(339, 27);
vertex(343, 23);
vertex(350, 34);
vertex(354, 26);
vertex(357, 34);
vertex(359, 33);
vertex(361, 42);
vertex(365, 40);
vertex(366, 45);
vertex(370, 44);
vertex(370, 53);
vertex(373, 52);
vertex(376, 60);
vertex(379, 59);
vertex(380, 66);
vertex(386, 69);
vertex(393, 80);
vertex(393, 91);
vertex(403, 92);
vertex(407, 105);
vertex(393, 111);
vertex(399, 114);
vertex(396, 118);
vertex(402, 120);
vertex(397, 124);
vertex(402, 133);
vertex(397, 139);
vertex(394, 157);
vertex(402, 152);
vertex(397, 164);
vertex(403, 167);
vertex(398, 175);
vertex(399, 178);
vertex(406, 171);
vertex(417, 180);
vertex(420, 161);
vertex(429, 91);
vertex(430, 47);
vertex(399, 14);
vertex(353, 1);
vertex(297, 0);
vertex(259, 0);
vertex(225, 0);
vertex(138, 0);
vertex(108, 13);
vertex(80, 36);
vertex(79, 39);
endShape();

//Hair Shadow
fill(61,61,61);
beginShape();
vertex(177, 19);
vertex(183, 63);
vertex(201, 54);
vertex(231, 67);
vertex(238, 55);
vertex(267, 68);
vertex(280, 57);
vertex(297, 70);
vertex(304, 76);
vertex(301, 87);
vertex(303, 90);
vertex(314, 73);
vertex(329, 92);
vertex(352, 75);
vertex(358, 65);
vertex(368, 80);
vertex(367, 94);
vertex(359, 97);
vertex(367, 115);
vertex(319, 97);
vertex(358, 124);
vertex(303, 97);
vertex(322, 113);
vertex(363, 130);
vertex(324, 124);
vertex(356, 135);
vertex(326, 130);
vertex(366, 156);
vertex(344, 158);
vertex(377, 168);
vertex(352, 170);
vertex(369, 175);
vertex(358, 186);
vertex(368, 194);
vertex(364, 198);
vertex(384, 192);
vertex(400, 180);
vertex(399, 174);
vertex(401, 166);
vertex(397, 163);
vertex(399, 157);
vertex(398, 153);
vertex(394, 155);
vertex(396, 138);
vertex(399, 136);
vertex(399, 128);
vertex(399, 125);
vertex(398, 124);
vertex(399, 119);
vertex(397, 118);
vertex(398, 115);
vertex(395, 113);
vertex(399, 108);
vertex(397, 94);
vertex(393, 90);
vertex(370, 51);
vertex(364, 42);
vertex(357, 34);
vertex(352, 28);
vertex(350, 33);
vertex(347, 27);
vertex(329, 22);
vertex(329, 30);
vertex(324, 23);
vertex(317, 19);
vertex(302, 26);
vertex(302, 16);
vertex(297, 18);
vertex(290, 26);
vertex(277, 28);
vertex(273, 8);
vertex(271, 28);
vertex(272, 11);
vertex(270, 9);
vertex(262, 29);
vertex(252, 5);
vertex(247, 26);
vertex(244, 5);
vertex(239, 18);
vertex(235, 4);
vertex(231, 36);
vertex(229, 7);
vertex(224, 30);
vertex(220, 7);
vertex(219, 22);
vertex(216, 10);
vertex(214, 10);
vertex(208, 26);
vertex(201, 10);
vertex(198, 32);
vertex(191, 15);
vertex(187, 15);
vertex(181, 32);
vertex(177, 17);
endShape();

//Fix Shirt
fill(255, 128, 128)
beginShape();
vertex(548, 469);
vertex(564, 508);
vertex(574, 600);
vertex(600, 600);
vertex(600, 472);
endShape();

//Shadow Shirt
fill(61,60,59);
beginShape();
vertex(44, 446);
vertex(10, 475);
vertex(9, 536);
vertex(6, 599);
vertex(47, 597);
vertex(43, 584);
vertex(38, 569);
vertex(46, 519);
vertex(31, 494);
vertex(54, 460);
vertex(63, 440);
endShape();
beginShape();
vertex(86, 454);
vertex(67, 468);
vertex(69, 516);
vertex(67, 598);
vertex(94, 598);
vertex(84, 511);
vertex(88, 466);
vertex(96, 453);
endShape();
beginShape();
vertex(167, 409);
vertex(137, 428);
vertex(111, 451);
vertex(109, 513);
vertex(115, 539);
vertex(114, 582);
vertex(113, 597);
vertex(141, 596);
vertex(138, 581);
vertex(145, 587);
vertex(147, 597);
vertex(158, 598);
vertex(157, 579);
vertex(157, 540);
vertex(167, 575);
vertex(170, 558);
vertex(167, 534);
vertex(182, 560);
vertex(193, 599);
vertex(206, 597);
vertex(201, 563);
vertex(199, 520);
vertex(207, 511);
vertex(238, 585);
vertex(245, 598);
vertex(259, 598);
vertex(252, 566);
vertex(223, 526);
vertex(236, 507);
vertex(275, 595);
vertex(277, 599);
vertex(295, 598);
vertex(294, 575);
vertex(305, 536);
vertex(308, 497);
vertex(286, 501);
vertex(225, 470);
vertex(186, 432);
vertex(184, 407);
vertex(176, 404);
vertex(97, 429);
endShape();
beginShape();
vertex(185, 407);
vertex(176, 405);
vertex(0, 460);
vertex(0, 599);
vertex(21, 599);
vertex(19, 468);
vertex(184, 408);
endShape();
}
