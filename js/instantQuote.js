// JavaScript Document
// 1 inch patch sizes (pr1in = price for 1 inch size)
var pr1in = new Array();
	pr1in[0] = 13.33;					  	// 1 pcs
	pr1in[1] = 12;						  // 2 to 4 pcs
	pr1in[2] = 6.67;					  	// 5 to 9 pcs
	pr1in[3] = 4.44;							// 10 to 24 pcs
	pr1in[4] = 3.11;							// 25 to 49 pcs
	pr1in[5] = 2;							// 50 to 99 pcs
	pr1in[6] = 1.11;							// 100 to 199 pcs
	pr1in[7] = 0.89;							// 200 to 299 pcs
	pr1in[8] = 0.67;							// 300 to 499 pcs
	pr1in[9] = 0.56;							// 500 to 999 pcs
	pr1in[10] = 0.44;	  					// 1000 to 1999 pcs
	pr1in[11] = 0.33; 						// 2000 pcs

// 1.5 inch patch sizes (pr1hin = price for 1 and a half inch size)
var pr1hin = new Array();
	pr1hin[0] = 13.33;					  	// 1 pcs
	pr1hin[1] = 12;						  // 2 to 4 pcs
	pr1hin[2] = 6.67;					  	// 5 to 9 pcs
	pr1hin[3] = 4.44;							// 10 to 24 pcs
	pr1hin[4] = 3.11;							// 25 to 49 pcs
	pr1hin[5] = 2;							// 50 to 99 pcs
	pr1hin[6] = 1.11;							// 100 to 199 pcs
	pr1hin[7] = 0.89;							// 200 to 299 pcs
	pr1hin[8] = 0.67;							// 300 to 499 pcs
	pr1hin[9] = 0.56;							// 500 to 999 pcs
	pr1hin[10] = 0.44;	  					// 1000 to 1999 pcs
	pr1hin[11] = 0.33; 						// 2000 pcs


// 2 inch patch sizes (pr2in = price for 2 inch size)
var pr2in = new Array();
	pr2in[0] = 8.75;			  			// 1 pcs
	pr2in[1] = 7.75;				  		// 2 to 4 pcs
	pr2in[2] = 4.24;				  		// 5 to 9 pcs
	pr2in[3] = 3;							// 10 to 24 pcs
	pr2in[4] = 2.13;							// 25 to 49 pcs
	pr2in[5] = 1.38;							// 50 to 99 pcs
	pr2in[6] = 0.75;							// 100 to 199 pcs
	pr2in[7] = 0.56;							// 200 to 299 pcs
	pr2in[8] = 0.44;							// 300 to 499 pcs
	pr2in[9] = 0.38;							// 500 to 999 pcs
	pr2in[10] = 0.31; 						// 1000 to 1999 pcs
	pr2in[11] = 0.25; 						// 2000 pcs

// 2.5 inch patch sizes (pr2hin = price for 2 and a half inch size)
var pr2hin = new Array();
	pr2hin[0] = 6.40;						// 1 pcs
	pr2hin[1] = 5.76;						// 2 to 4 pcs
	pr2hin[2] = 4.24;						// 5 to 9 pcs
	pr2hin[3] = 1.52;							// 10 to 24 pcs
	pr2hin[4] = 1.00;							// 25 to 49 pcs
	pr2hin[5] = 0.56;							// 50 to 99 pcs
	pr2hin[6] = 0.6;							// 100 to 199 pcs
	pr2hin[7] = 0.40;							// 200 to 299 pcs
	pr2hin[8] = 0.36;							// 300 to 499 pcs
	pr2hin[9] = 0.32;							// 500 to 999 pcs
	pr2hin[10] = 0.28;						// 1000 to 1999 pcs
	pr2hin[11] = 0.24;						// 2000 pcs

// 3 inch patch sizes (pr3in = price for 3 inch size)
var pr3in = new Array();
	pr3in[0] = 5.00;							// 1 pcs
	pr3in[1] = 4.33;							// 2 to 4 pcs
	pr3in[2] = 2.33;							// 5 to 9 pcs
	pr3in[3] = 1.78;							// 10 to 24 pcs
	pr3in[4] = 1.22;							// 25 to 49 pcs
	pr3in[5] = 0.78;							// 50 to 99 pcs
	pr3in[6] = 0.44;							// 100 to 199 pcs
	pr3in[7] = 0.31;							// 200 to 299 pcs
	pr3in[8] = 0.28;							// 300 to 499 pcs	
	pr3in[9] = 0.25;							// 500 to 999 pcs
	pr3in[10] = 0.22;							// 1000 to 1999 pcs
	pr3in[11] = 0.19;							// 2000 pcs

// 3.5 inch patch sizes (pr3hin = price for 3 and a half inch size)
var pr3hin = new Array();
	pr3hin[0] = 4.49;						// 1 pcs
	pr3hin[1] = 3.84;						// 2 to 4 pcs
	pr3hin[2] = 1.96;						// 5 to 9 pcs
	pr3hin[3] = 1.47;							// 10 to 24 pcs
	pr3hin[4] = 1.06;							// 25 to 49 pcs
	pr3hin[5] = 0.65;							// 50 to 99 pcs
	pr3hin[6] = 0.41;							// 100 to 199 pcs
	pr3hin[7] = 0.24;							// 200 to 299 pcs
	pr3hin[8] = 0.22;							// 300 to 499 pcs
	pr3hin[9] = 0.20;							// 500 to 999 pcs
	pr3hin[10] = 0.18;						// 1000 to 1999 pcs
	pr3hin[11] = 0.16;						// 2000 pcs

// 4 inch patch sizes (pr4in = price for 4 inch size)
var pr4in = new Array();
	pr4in[0] = 3.75;							// 1 pcs
	pr4in[1] = 3.31;							// 2 to 4 pcs
	pr4in[2] = 1.63;							// 5 to 9 pcs
	pr4in[3] = 1.25;							// 10 to 24 pcs
	pr4in[4] = 0.94;							// 25 to 49 pcs
	pr4in[5] = 0.56;							// 50 to 99 pcs
	pr4in[6] = 0.38;							// 100 to 199 pcs
	pr4in[7] = 0.25;							// 200 to 299 pcs
	pr4in[8] = 0.22;							// 300 to 499 pcs
	pr4in[9] = 0.19;							// 500 to 999 pcs
	pr4in[10] = 0.17;							// 1000 to 1999 pcs
	pr4in[11] = 0.16;							// 2000 pcs

// 4.5 inch patch sizes (pr4hin = price for 4 and a half inch size)
var pr4hin = new Array();
	pr4hin[0] = 3.46;						// 1 pcs
	pr4hin[1] = 3.11;						// 2 to 4 pcs
	pr4hin[2] = 1.58;						// 5 to 9 pcs
	pr4hin[3] = 1.09;						// 10 to 24 pcs
	pr4hin[4] = 0.84;							// 25 to 49 pcs
	pr4hin[5] = 0.49;							// 50 to 99 pcs
	pr4hin[6] = 0.35;							// 100 to 199 pcs
	pr4hin[7] = 0.22;							// 200 to 299 pcs
	pr4hin[8] = 0.20;							// 300 to 499 pcs
	pr4hin[9] = 0.17;							// 500 to 999 pcs
	pr4hin[10] = 0.15;						// 1000 to 1999 pcs
	pr4hin[11] = 0.14;						// 2000 pcs

// 5 inch patch sizes (pr5in = price for 5 inch size)
var pr5in = new Array();
	pr5in[0] = 3.20;							// 1 pcs
	pr5in[1] = 2.92;							// 2 to 4 pcs
	pr5in[2] = 1.60;							// 5 to 9 pcs
	pr5in[3] = 0.92;							// 10 to 24 pcs
	pr5in[4] = 0.78;							// 25 to 49 pcs
	pr5in[5] = 0.48;							// 50 to 99 pcs
	pr5in[6] = 0.34;							// 100 to 199 pcs
	pr5in[7] = 0.22;							// 200 to 299 pcs
	pr5in[8] = 0.20;							// 300 to 499 pcs
	pr5in[9] = 0.16;							// 500 to 999 pcs
	pr5in[10] = 0.14;							// 1000 to 1999 pcs
	pr5in[11] = 0.13;							// 2000 pcs

// 5.5 inch patch sizes (pr5hin = price for 5 and a half inch size)
var pr5hin = new Array();
	pr5hin[0] = 2.98;						// 1 pcs
	pr5hin[1] = 2.74;						// 2 to 4 pcs
	pr5hin[2] = 1.65;						// 5 to 9 pcs
	pr5hin[3] = 0.83;						// 10 to 24 pcs
	pr5hin[4] = 0.66;						// 25 to 49 pcs
	pr5hin[5] = 0.43;							// 50 to 99 pcs
	pr5hin[6] = 0.33;							// 100 to 199 pcs
	pr5hin[7] = 0.23;							// 200 to 299 pcs
	pr5hin[8] = 0.20;							// 300 to 499 pcs
	pr5hin[9] = 0.17; 						// 500 to 999 pcs
	pr5hin[10] = 0.14;						// 1000 to 1999 pcs
	pr5hin[11] = 0.12;						// 2000 pcs

// 6 inch patch sizes (pr6in = price for 6 inch size)
var pr6in = new Array();
	pr6in[0] = 2.78;						// 1 pcs
	pr6in[1] = 2.58;							// 2 to 4 pcs
	pr6in[2] = 1.67;							// 5 to 9 pcs
	pr6in[3] = 0.75;							// 10 to 24 pcs
	pr6in[4] = 0.61;							// 25 to 49 pcs
	pr6in[5] = 0.42;							// 50 to 99 pcs
	pr6in[6] = 0.33;							// 100 to 199 pcs
	pr6in[7] = 0.23;							// 200 to 299 pcs
	pr6in[8] = 0.19;							// 300 to 499 pcs
	pr6in[9] = 0.17; 						// 500 to 999 pcs
	pr6in[10] = 0.14;						// 1000 to 1999 pcs
	pr6in[11] = 0.12;						// 2000 pcs

// 6.5 inch patch sizes (pr6hin = price for 6 and a half inch size)
var pr6hin = new Array();
	pr6hin[0] = 2.60;						// 1 pcs
	pr6hin[1] = 2.44;							// 2 to 4 pcs
	pr6hin[2] = 1.59;							// 5 to 9 pcs
	pr6hin[3] = 0.69;							// 10 to 24 pcs
	pr6hin[4] = 0.57;							// 25 to 49 pcs
	pr6hin[5] = 0.38;							// 50 to 99 pcs
	pr6hin[6] = 0.31;							// 100 to 199 pcs
	pr6hin[7] = 0.21;							// 200 to 299 pcs
	pr6hin[8] = 0.19;							// 300 to 499 pcs
	pr6hin[9] = 0.17; 						// 500 to 999 pcs
	pr6hin[10] = 0.14;						// 1000 to 1999 pcs
	pr6hin[11] = 0.12;						// 2000 pcs

// 7 inch patch sizes (pr7hin = price for 7 inch size)
var pr7in = new Array();
	pr7in[0] = 2.45;						// 1 pcs
	pr7in[1] = 2.31;							// 2 to 4 pcs
	pr7in[2] = 1.57;							// 5 to 9 pcs
	pr7in[3] = 0.63;							// 10 to 24 pcs
	pr7in[4] = 0.53;							// 25 to 49 pcs
	pr7in[5] = 0.35;							// 50 to 99 pcs
	pr7in[6] = 0.29;							// 100 to 199 pcs
	pr7in[7] = 0.20;							// 200 to 299 pcs
	pr7in[8] = 0.18;							// 300 to 499 pcs
	pr7in[9] = 0.16; 						// 500 to 999 pcs
	pr7in[10] = 0.14;						// 1000 to 1999 pcs
	pr7in[11] = 0.12;						// 2000 pcs
	
// 7.5 inch patch sizes (pr7hin = price for 7 and a half inch size)
var pr7hin = new Array();
	pr7hin[0] = 2.30;						// 1 pcs
	pr7hin[1] = 2.19;							// 2 to 4 pcs
	pr7hin[2] = 1.49;							// 5 to 9 pcs
	pr7hin[3] = 0.59;							// 10 to 24 pcs
	pr7hin[4] = 0.50;							// 25 to 49 pcs
	pr7hin[5] = 0.32;							// 50 to 99 pcs
	pr7hin[6] = 0.27;							// 100 to 199 pcs
	pr7hin[7] = 0.20;							// 200 to 299 pcs
	pr7hin[8] = 0.18;							// 300 to 499 pcs
	pr7hin[9] = 0.16; 						// 500 to 999 pcs
	pr7hin[10] = 0.14;						// 1000 to 1999 pcs
	pr7hin[11] = 0.12;						// 2000 pcs	

// 8 inch patch sizes (pr8in = price for 8 inch size)
var pr8in = new Array();
	pr8in[0] = 2.19;						// 1 pcs
	pr8in[1] = 2.08;							// 2 to 4 pcs
	pr8in[2] = 1.47;							// 5 to 9 pcs
	pr8in[3] = 0.55;							// 10 to 24 pcs
	pr8in[4] = 0.47;							// 25 to 49 pcs
	pr8in[5] = 0.31;							// 50 to 99 pcs
	pr8in[6] = 0.27;							// 100 to 199 pcs
	pr8in[7] = 0.20;							// 200 to 299 pcs
	pr8in[8] = 0.19;							// 300 to 499 pcs
	pr8in[9] = 0.17; 						// 500 to 999 pcs
	pr8in[10] = 0.16;						// 1000 to 1999 pcs
	pr8in[11] = 0.14;						// 2000 pcs
	
// 8.5 inch patch sizes (pr8hin = price for 8 and a half inch size)
var pr8hin = new Array();
	pr8hin[0] = 2.08;						// 1 pcs
	pr8hin[1] = 1.98;							// 2 to 4 pcs
	pr8hin[2] = 1.40;							// 5 to 9 pcs
	pr8hin[3] = 0.93;							// 10 to 24 pcs
	pr8hin[4] = 0.55;							// 25 to 49 pcs
	pr8hin[5] = 0.35;							// 50 to 99 pcs
	pr8hin[6] = 0.28;							// 100 to 199 pcs
	pr8hin[7] = 0.22;							// 200 to 299 pcs
	pr8hin[8] = 0.19;							// 300 to 499 pcs
	pr8hin[9] = 0.17; 						// 500 to 999 pcs
	pr8hin[10] = 0.16;						// 1000 to 1999 pcs
	pr8hin[11] = 0.14;						// 2000 pcs	

// 9 inch patch sizes (pr9in = price for 9 inch size)
var pr9in = new Array();
	pr9in[0] = 2.10;						// 1 pcs
	pr9in[1] = 2.01;							// 2 to 4 pcs
	pr9in[2] = 1.54;							// 5 to 9 pcs
	pr9in[3] = 0.93;							// 10 to 24 pcs
	pr9in[4] = 0.62;							// 25 to 49 pcs
	pr9in[5] = 0.43;							// 50 to 99 pcs
	pr9in[6] = 0.33;							// 100 to 199 pcs
	pr9in[7] = 0.25;							// 200 to 299 pcs
	pr9in[8] = 0.20;							// 300 to 499 pcs
	pr9in[9] = 0.19; 						// 500 to 999 pcs
	pr9in[10] = 0.17;						// 1000 to 1999 pcs
	pr9in[11] = 0.15;						// 2000 pcs
	
// 9.5 inch patch sizes (pr9hin = price for 9 and a half inch size
var pr9hin = new Array();
	pr9hin[0] = 1.99;						// 1 pcs
	pr9hin[1] = 1.92;							// 2 to 4 pcs
	pr9hin[2] = 1.55;							// 5 to 9 pcs
	pr9hin[3] = 1.05;							// 10 to 24 pcs
	pr9hin[4] = 0.66;							// 25 to 49 pcs
	pr9hin[5] = 0.50;							// 50 to 99 pcs
	pr9hin[6] = 0.35;							// 100 to 199 pcs
	pr9hin[7] = 0.25;							// 200 to 299 pcs
	pr9hin[8] = 0.22;							// 300 to 499 pcs
	pr9hin[9] = 0.20; 						// 500 to 999 pcs
	pr9hin[10] = 0.18;						// 1000 to 1999 pcs
	pr9hin[11] = 0.16;						// 2000 pcs	
	
// 10 inch patch sizes (pr10in = price for 10 inch size)
var pr10in = new Array();
	pr10in[0] = 2.00;						// 1 pcs
	pr10in[1] = 1.80;							// 2 to 4 pcs
	pr10in[2] = 1.65;							// 5 to 9 pcs
	pr10in[3] = 1.25;							// 10 to 24 pcs
	pr10in[4] = 0.80;							// 25 to 49 pcs
	pr10in[5] = 0.60;							// 50 to 99 pcs
	pr10in[6] = 0.40;							// 100 to 199 pcs
	pr10in[7] = 0.27;							// 200 to 299 pcs
	pr10in[8] = 0.24;							// 300 to 499 pcs
	pr10in[9] = 0.21; 						// 500 to 999 pcs
	pr10in[10] = 0.19;						// 1000 to 1999 pcs
	pr10in[11] = 0.16;						// 2000 pcs	
	
// 10.5 inch patch sizes (pr10hin = price for 10 and a half inch size)
var pr10hin = new Array();
	pr10hin[0] = 2.00;						// 1 pcs
	pr10hin[1] = 1.81;							// 2 to 4 pcs
	pr10hin[2] = 1.59;							// 5 to 9 pcs
	pr10hin[3] = 1.22;							// 10 to 24 pcs
	pr10hin[4] = 0.82;							// 25 to 49 pcs
	pr10hin[5] = 0.63;							// 50 to 99 pcs
	pr10hin[6] = 0.44;							// 100 to 199 pcs
	pr10hin[7] = 0.29;							// 200 to 299 pcs
	pr10hin[8] = 0.26;							// 300 to 499 pcs
	pr10hin[9] = 0.24; 						// 500 to 999 pcs
	pr10hin[10] = 0.21;						// 1000 to 1999 pcs
	pr10hin[11] = 0.18;						// 2000 pcs	
	
// 11 inch patch sizes (pr11in = price for 11 inch size)
var pr11in = new Array();
	pr11in[0] = 2.07;						// 1 pcs
	pr11in[1] = 1.90;							// 2 to 4 pcs
	pr11in[2] = 1.65;							// 5 to 9 pcs
	pr11in[3] = 1.28;							// 10 to 24 pcs
	pr11in[4] = 0.91;							// 25 to 49 pcs
	pr11in[5] = 0.70;							// 50 to 99 pcs
	pr11in[6] = 0.54;							// 100 to 199 pcs
	pr11in[7] = 0.35;							// 200 to 299 pcs
	pr11in[8] = 0.31;							// 300 to 499 pcs
	pr11in[9] = 0.28; 						// 500 to 999 pcs
	pr11in[10] = 0.25;						// 1000 to 1999 pcs
	pr11in[11] = 0.21;						// 2000 pcs	
	
// 11.5 inch patch sizes (pr11hin = price for 11 and a half inch size)
var pr11hin = new Array();
	pr11hin[0] = 2.08;						// 1 pcs
	pr11hin[1] = 1.93;							// 2 to 4 pcs
	pr11hin[2] = 1.59;							// 5 to 9 pcs
	pr11hin[3] = 1.25;							// 10 to 24 pcs
	pr11hin[4] = 0.91;							// 25 to 49 pcs
	pr11hin[5] = 0.72;							// 50 to 99 pcs
	pr11hin[6] = 0.57;							// 100 to 199 pcs
	pr11hin[7] = 0.38;							// 200 to 299 pcs
	pr11hin[8] = 0.32;							// 300 to 499 pcs
	pr11hin[9] = 0.29; 						// 500 to 999 pcs
	pr11hin[10] = 0.26;						// 1000 to 1999 pcs
	pr11hin[11] = 0.23;						// 2000 pcs		
	
// 12 inch patch sizes (pr12in = price for 12 inch size)
var pr12in = new Array();
	pr12in[0] = 2.08;						// 1 pcs
	pr12in[1] = 1.94;							// 2 to 4 pcs
	pr12in[2] = 1.56;							// 5 to 9 pcs
	pr12in[3] = 1.39;							// 10 to 24 pcs
	pr12in[4] = 1.15;							// 25 to 49 pcs
	pr12in[5] = 0.83;							// 50 to 99 pcs
	pr12in[6] = 0.63;							// 100 to 199 pcs
	pr12in[7] = 0.42;							// 200 to 299 pcs
	pr12in[8] = 0.35;							// 300 to 499 pcs
	pr12in[9] = 0.31; 						// 500 to 999 pcs
	pr12in[10] = 0.28;						// 1000 to 1999 pcs
	pr12in[11] = 0.24;						// 2000 pcs			

// (the customer must request a normal quote for sizes larger than 10 inches)

// extra costs based on quantity for 100% embroidery
var hpsQtyExtra = new Array();
	hpsQtyExtra[0] = 1;						// 1 to 9 pieces
	hpsQtyExtra[1] = 0.75;				// 10 to 24 pieces
	hpsQtyExtra[2] = 0.50;				// 25 to 49 pieces
	hpsQtyExtra[3] = 0.20;				// 50 to 499 pieces
	hpsQtyExtra[4] = 0.19;				// 500 to 999 pieces
	hpsQtyExtra[5] = 0.18;				// 1000+ pieces

// extra cost factors based on size for 100% embroidery
var hpsSizeExtra = new Array();
	hpsSizeExtra[0] = 0.95;				// 1 inch and below
	hpsSizeExtra[1] = 0.96;				// 1.5 inch
	hpsSizeExtra[2] = 0.97;				// 2 inches
	hpsSizeExtra[3] = 0.99;				// 2.5 inches
	hpsSizeExtra[4] = 1.00;				// 3 inches
	hpsSizeExtra[5] = 1.05;				// 3.5 inches
	hpsSizeExtra[6] = 1.10;				// 4 inches
	hpsSizeExtra[7] = 1.20;				// 4.5 inches
	hpsSizeExtra[8] = 1.35;				// 5 inches
	hpsSizeExtra[9] = 1.50;				// 5.5 inches
	hpsSizeExtra[10] = 1.80;			// 6 inches
	hpsSizeExtra[11] = 2.20;			// 7 inches
	hpsSizeExtra[12] = 2.50;			// 8 inches
	hpsSizeExtra[13] = 2.80;			// 9 inches
	hpsSizeExtra[14] = 3.00;			// 10 inches

// extra costs for velcro backing
var velcroExtra = new Array();
	velcroExtra[0] = .35;				// 1 to 9 pieces
	velcroExtra[1] = .75;				// 10 to 24 pieces
	velcroExtra[2] = 2;				// 25 to 49 pieces

// extra costs for iron on backing
var ironOnExtra = new Array();
	ironOnExtra[0] = 0.95;				// 1 to 9 pieces
	ironOnExtra[1] = 0.85;				// 10 to 24 pieces
	ironOnExtra[2] = 0.50;				// 25 to 49 pieces
	ironOnExtra[3] = 0.29;				// 50 to 499 pieces
	ironOnExtra[4] = 0.25;				// 500 to 999 pieces
	ironOnExtra[5] = 0.20;				// 1000+ pieces

// extra costs for plastic backing
var plasticExtra = new Array();
	plasticExtra[0] = 0.95;				// 1 to 9 pieces
	plasticExtra[1] = 0.75;				// 10 to 24 pieces
	plasticExtra[2] = 0.50;				// 25 to 49 pieces
	plasticExtra[3] = 0.19;				// 50 to 499 pieces
	plasticExtra[4] = 0.19;				// 500 to 999 pieces
	plasticExtra[5] = 0.19;				// 1000+ pieces

// extra costs for peel and stick adhesive backing
var adhesiveExtra = new Array();
	adhesiveExtra[0] = 1.25;			// 1 to 9 pieces
	adhesiveExtra[1] = 1.15;			// 10 to 24 pieces
	adhesiveExtra[2] = 1.05;			// 25 to 49 pieces
	adhesiveExtra[3] = 0.95;			// 50 to 499 pieces
	adhesiveExtra[4] = 0.85;			// 500 to 999 pieces
	adhesiveExtra[5] = 0.75;			// 1000+ pieces

//extra costs for 3D embroidery
var threeDExtra = new Array();
	threeDExtra[0] = 3.00;				// 1 to 9 pieces
	threeDExtra[1] = 2.00;				// 10 to 24 pieces
	threeDExtra[2] = 1.25;				// 25 to 49 pieces
	threeDExtra[3] = 0.85;				// 50 to 499 pieces
	threeDExtra[4] = 0.75;				// 500 to 999 pieces
	threeDExtra[5] = 0.65;				// 1000+ pieces

var blendingExtra = new Array();
	blendingExtra[0] = 1.00;			// 1 to 9 pieces
	blendingExtra[1] = 0.75;			// 10 to 24 pieces
	blendingExtra[2] = 0.50;			// 25 to 49 pieces
	blendingExtra[3] = 0.30;			// 50 to 499 pieces
	blendingExtra[4] = 0.20;			// 500 to 999 pieces
	blendingExtra[5] = 0.10;			// 1000+ pieces

var metallicExtra = new Array();
	metallicExtra[0] = 1.00;			// 1 to 9 pieces
	metallicExtra[1] = 0.75;			// 10 to 24 pieces
	metallicExtra[2] = 0.50;			// 25 to 49 pieces
	metallicExtra[3] = 0.30;			// 50 to 499 pieces
	metallicExtra[4] = 0.28;			// 500 to 999 pieces
	metallicExtra[5] = 0.25;			// 1000+ pieces

var glowExtra = new Array();
	glowExtra[0] = 1.00;					// 1 to 9 pieces
	glowExtra[1] = 0.75;					// 10 to 24 pieces
	glowExtra[2] = 0.50;					// 25 to 49 pieces
	glowExtra[3] = 0.40;					// 50 to 499 pieces
	glowExtra[4] = 0.35;					// 500 to 999 pieces
	glowExtra[5] = 0.30;					// 1000+ pieces

var buttonLoopExtra = new Array();
	buttonLoopExtra[0] = 0.50;		// 1 to 9 pieces
	buttonLoopExtra[1] = 0.25;		// 10 to 24 pieces
	buttonLoopExtra[2] = 0.20;		// 25 to 49 pieces
	buttonLoopExtra[3] = 0.15;		// 50 to 499 pieces
	buttonLoopExtra[4] = 0.12;		// 500 to 999 pieces
	buttonLoopExtra[5] = 0.10;		// 1000+ pieces

// array for calculating additional price breaks
var npbArr = new Array();
  npbArr[0] = 1;
  npbArr[1] = 2;
  npbArr[2] = 5;
  npbArr[3] = 10;
  npbArr[4] = 25;
  npbArr[5] = 50;
  npbArr[6] = 100;
  npbArr[7] = 200;
  npbArr[8] = 300;
  npbArr[9] = 500;
  npbArr[10] = 1000;
  npbArr[11] = 2000;

function calcPrice() {
	
	var quoteForm = document.forms["wf-form-Quote-Form"];

  // reset size and quantity warnings
  document.getElementById('maxSizeMessage').innerHTML = "";
  document.getElementById('maxQtyMessage').innerHTML = "";
	
	var quantity = document.getElementById('Quantity').value;
	if (isNaN(quantity)) {		// make sure there's a number entered before proceeding
		return;
	}
	if (typeof quantity != 'number') {		// remove commas in the number
		quantity = quantity.replace(/\,/g,'');
		quantity = parseInt(quantity,10);
		document.getElementById('Quantity').value = quantity;
	}
	
		
	var height = parseFloat(document.getElementById('sizeHeight').value);
	var width = parseFloat(document.getElementById('sizeWidth').value);

  // if the width or height is larger than 15 inches, display a message and set it to 15
  if (height > 15) {
    document.getElementById('maxSizeMessage').className = "quotelabel pricedisclaimer alert";
    document.getElementById('maxSizeMessage').innerHTML = '15 inches is the largest our patches can be. If you are looking to order patch sets, please use our <a href="request-quote.html">quote request form</a> to get a price quote.';
    document.getElementById('sizeHeight').value = 15;
    height = 15;
  }
  if (width > 15) {
    document.getElementById('maxSizeMessage').className = "quotelabel pricedisclaimer alert";
    document.getElementById('maxSizeMessage').innerHTML = '15 inches is the largest our patches can be. If you are looking to order patch sets, please use our <a href="request-quote.html">quote request form</a> to get a price quote.';
    document.getElementById('sizeWidth').value = 15;
    width = 15;
  }
  // size is the average of the height and width
	var size = parseFloat(((height + width) / 2.0).toFixed(2));
  document.getElementById('avgSize').innerHTML = "(Averaged Size is " + size + " inches)";
  //document.getElementById('sizeAverage-hidden').value = size;


  // if the size is small, show a note about the design having to be simple
  if (size < 2) {
    document.getElementById('maxSizeMessage').innerHTML = "*Note: if your patch is a small size, your design may have to be simplified so that it looks better on the finished product."
    document.getElementById('maxSizeMessage').className = "quotelabel pricedisclaimer note";
  }

  // if the size is 10" or above, show a note about needing to use basic quote form. Also don't show 
  //    any pricing or extra price breaks.
  
  /*
  if (size > 10) {
    // show note
    document.getElementById('otherSizeMessage').innerHTML = '*Note: This form can\'t give pricing for patches with an averaged size of 10 inches or larger. The cost varies too much based on the design. We will have to calculate a price ourselves after seeing the design, so please use our <a href="request-quote.html">quote request form</a> to get a price quote.';
    // clear pricing
    document.getElementById('maxSizeMessage').innerHTML = "";
    document.getElementById('basePrice').innerHTML = "";
    document.getElementById('backingPrice').innerHTML = "";
    document.getElementById('extraEmbroideryPrice').innerHTML = "";
    document.getElementById('threeDPrice').innerHTML = "";
    document.getElementById('blendingPrice').innerHTML = "";
    document.getElementById('metallicPrice').innerHTML = "";
    document.getElementById('glowPrice').innerHTML = "";
    document.getElementById('buttonLoopPrice').innerHTML = "";
    document.getElementById('ppprice').innerHTML = "";
    document.getElementById('subtotal').innerHTML = "";
    // clear additional price breaks
    document.getElementById('npbTooManyNote').innerHTML = 'Please use our <a href="request-quote.html">quote request form</a> for patches larger than 10 inches.';
    document.getElementById('npbRow1').className = "w-row";
    document.getElementById('npbLabel1pp').innerHTML = "";
    document.getElementById('npbLabel1t').innerHTML = "";
    document.getElementById('npbPrice1pp').innerHTML = "";
    document.getElementById('npbPrice1t').innerHTML = "";
    document.getElementById('npbLabel2pp').innerHTML = "";
    document.getElementById('npbLabel2t').innerHTML = "";
    document.getElementById('npbPrice2pp').innerHTML = "";
    document.getElementById('npbPrice2t').innerHTML = "";
    document.getElementById('npbTooManyBottom').innerHTML = "";
    document.getElementById('setupFree').innerHTML = "";
    return;
  } else {
    document.getElementById('otherSizeMessage').innerHTML = "";
    document.getElementById('npbTooManyNote').innerHTML = "";
    document.getElementById('setupFree').innerHTML = "FREE";
  }
 */
 	
  //if (quantity > 2000) {
	  
  if (quantity != 1111111) {	 
  	
    
	//document.getElementById('maxQtyMessage').innerHTML = 'For a price quote on quantities above 2000 pieces, please use our <a href="request-quote.html">quote request form</a>.';
		//quantity = 2000;
		//document.getElementById('Quantity').value = 2000;
	} else {
	  document.getElementById('maxQtyMessage').innerHTML = "";
	}
	
	// here's some ugliness to select the proper pricing array based on the size
	var pricingArr;
	var hpsSizeIndex;
	if (size <= 1.0) {
		pricingArr = pr1in;
		hpsSizeIndex = 0;
	} else if (size <= 1.5) {
		pricingArr = pr1hin;
		hpsSizeIndex = 1;
	} else if (size <= 2.0) {
		pricingArr = pr2in;
		hpsSizeIndex = 2;
	} else if (size <= 2.5) {
		pricingArr = pr2hin;
		hpsSizeIndex = 3;
	} else if (size <= 3.0) {
		pricingArr = pr3in;
		hpsSizeIndex = 4;
	} else if (size <= 3.5) {
		pricingArr = pr3hin;
		hpsSizeIndex = 5;
	} else if (size <= 4.0) {
		pricingArr = pr4in;
		hpsSizeIndex = 6;
	} else if (size <= 4.5) {
		pricingArr = pr4hin;
		hpsSizeIndex = 7;
	} else if (size <= 5.0) {
		pricingArr = pr5in;
		hpsSizeIndex = 8;
	} else if (size <= 5.5) {
		pricingArr = pr5hin;
		hpsSizeIndex = 9;
	} else if (size <= 6.0) {
		pricingArr = pr6in;
		hpsSizeIndex = 10;
	} else if (size <= 6.5) {
		pricingArr = pr6hin;
		hpsSizeIndex = 11;
	} else if (size <= 7.0) {
		pricingArr = pr7in;
		hpsSizeIndex = 11;
	} else if (size <= 7.5) {
		pricingArr = pr7hin;
		hpsSizeIndex = 12;
	} else if (size <= 8.0) {
		pricingArr = pr8in;
		hpsSizeIndex = 12;
	} else if (size <= 8.5) {
		pricingArr = pr8hin;
		hpsSizeIndex = 13;
	} else if (size <= 9.0) {
		pricingArr = pr9in;
		hpsSizeIndex = 13;
	} else if (size <= 9.5) {
		pricingArr = pr9hin;
		hpsSizeIndex = 14;
	} else if (size <= 10.0) {
		pricingArr = pr10in;
		hpsSizeIndex = 14;
	} else if (size <= 10.5) {
		pricingArr = pr10hin;
		hpsSizeIndex = 15;
	} else if (size <= 11.0) {
		pricingArr = pr11in;
		hpsSizeIndex = 15;
	} else if (size <= 11.5) {
		pricingArr = pr11hin;
		hpsSizeIndex = 16;
	} else if (size <= 12.0) {
		pricingArr = pr12in;
		hpsSizeIndex = 16;
	} else {
		// size is too large! (this should be unreachable because of the if's above that deal with the size)
	} // end if/else that selects pricing array based on size
	
	var ppPrice = 0;
	var priceIndex;
	var extrasIndex;
	var npbIndex1;
	var npbExtra1;
	var npbExtra2;
  // set the array indexes based on the quantity
	if (quantity == 1) {
		priceIndex = 0;
		extrasIndex = 0;
		npbIndex1 = 1;
		npbExtra1 = 0;
		npbExtra2 = 0;
	} else if (quantity <= 4) {
		priceIndex = 1;
		extrasIndex = 0;
		npbIndex1 = 2;
		npbExtra1 = 0;
		npbExtra2 = 0;
	} else if (quantity <= 7) {
		priceIndex = 2;
		extrasIndex = 1;
		npbIndex1 = 3;
		npbExtra1 = 0;
		npbExtra2 = 1;
	} else if (quantity <= 8) {
		priceIndex = 3;
		extrasIndex = 2;
		npbIndex1 = 4;
		npbExtra1 = 1;
		npbExtra2 = 2;
	} else if (quantity <= 49) {
		priceIndex = 4;
		extrasIndex = 2;
		npbIndex1 = 5;
		npbExtra1 = 2;
		npbExtra2 = 3;
	} else if (quantity <= 99) {
		priceIndex = 5;
		extrasIndex = 2;
		npbIndex1 = 6;
		npbExtra1 = 3;
		npbExtra2 = 3;
	} else if (quantity <= 199) {
		priceIndex = 6;
		extrasIndex = 2;
		npbIndex1 = 7;
		npbExtra1 = 3;
		npbExtra2 = 3;
	} else if (quantity <= 299) {
		priceIndex = 7;
		extrasIndex = 2;
		npbIndex1 = 8;
		npbExtra1 = 3;
		npbExtra2 = 3;
	} else if (quantity <= 499) {
		priceIndex = 8;
		extrasIndex = 2;
		npbIndex1 = 9;
		npbExtra1 = 3;
		npbExtra2 = 4;
	} else if (quantity <= 999) {
		priceIndex = 9;
		extrasIndex = 2;
		npbIndex1 = 10;
		npbExtra1 = 4;
		npbExtra2 = 5;
	} else if (quantity <= 1999) {
		priceIndex = 10;
		extrasIndex = 2;
		npbIndex1 = 11;
		npbExtra1 = 5;
		npbExtra2 = null;
	} else if (quantity == 2000) {
		priceIndex = 11;
		extrasIndex = 2;
		npbIndex1 = null; // (there are no breaks after 2000 pieces)
		npbExtra1 = null;
		npbExtra2 = null;
	} else {  // quantity is too big! Display alert and set to largest possible quantity.
		//quantity too large! Should be unreachable.
	} // end else/if that selects pricing indexes based on quantity

	var hpsPrice = 0;
	var npbHpsPrice1 = 0;
	var npbHpsPrice2 = 0;
	
	// if 100% embroidered, calculate the extra cost
	/*
	if (quoteForm.elements["embroideryAmount"].value == "100% embroidered") {
		hpsPrice = parseFloat((hpsQtyExtra[extrasIndex] * hpsSizeExtra[hpsSizeIndex]).toFixed(2));
		npbHpsPrice1 = hpsQtyExtra[npbExtra1] * hpsSizeExtra[hpsSizeIndex];
		npbHpsPrice2 = hpsQtyExtra[npbExtra2] * hpsSizeExtra[hpsSizeIndex];
		document.getElementById('extraEmbroideryLabel').innerHTML = "100% Embroidery";
		document.getElementById('extraEmbroideryPrice').innerHTML = "+ $" + hpsPrice.toFixed(2) + " each";
		document.getElementById('hpsPrice-hidden').value = hpsPrice.toFixed(2);
	} else {
    document.getElementById('extraEmbroideryLabel').innerHTML = "";
    document.getElementById('extraEmbroideryPrice').innerHTML = "";
	}
	*/
	
	var backing = quoteForm.elements["Backing"].value;
	
	var backingArr;
	var backingCost = 0;
	var npbBacking1 = 0;
	var npbBacking2 = 0;
	
	// Calculate the extra cost for the backing, if one is selected
	if (backing != "No backing (sew on)") {
		// set backingArr to the appropriate pricing array for the selected backing
		if (backing == "Velcro Backing") {
			backingArr = velcroExtra;
			document.getElementById('backingLabel').innerHTML = "Velcro Backing";
			document.getElementById('backingPrice').innerHTML = "+ $" + backingArr[extrasIndex].toFixed(2) + " each";
		} else if (backing == "Iron On / Heat Seal") {
			backingArr = ironOnExtra;
			document.getElementById('backingLabel').innerHTML = "Iron On Backing";
			document.getElementById('backingPrice').innerHTML = "+ $" + backingArr[extrasIndex].toFixed(2) + " each";
		}
		/*
		 else if (backing == "Plastic") {
			backingArr = plasticExtra;
			document.getElementById('backingLabel').innerHTML = "Plastic Backing";
			document.getElementById('backingPrice').innerHTML = "+ $" + backingArr[extrasIndex].toFixed(2) + " each";
		} else if (backing == "Peel and Stick Adhesive") {
			backingArr = adhesiveExtra;
			document.getElementById('backingLabel').innerHTML = "Adhesive Backing";
			document.getElementById('backingPrice').innerHTML = "+ $" + backingArr[extrasIndex].toFixed(2) + " each";
		} */
		else { 			// should be unreachable
			console.log("Whoops! You broke it!");
			return;
		}
		backingCost = backingArr[extrasIndex];
		npbBacking1 = backingArr[npbExtra1];
		npbBacking2 = backingArr[npbExtra2];
		document.getElementById('backingPrice-hidden').value = backingCost;
	} else { // no backing
	  document.getElementById('backingLabel').innerHTML = "No Backing";
	  document.getElementById('backingPrice').innerHTML = "Free";
	}
	
	
	//if velcro backing is selected, display a note about how both pieces are included
	if (backing == "Velcro Backing") {
	  document.getElementById('backingNote').innerHTML = "Both velcro pieces are included when you order the velcro backing. The hook side is sewn to the patch and the loop side is also included."
	} else {
	  document.getElementById('backingNote').innerHTML = "";
	}
	

  // calculate the extra feature costs and add them together
  var featuresCost = 0;
  var npbFeatures1 = 0;
  var npbFeatures2 = 0;
  // if a feature box is checked, add the extra cost for that feature. Otherwise the
  //    cost just stays at 0 because no features are selected.
/*
	if (document.getElementById('3D-Embroidery').checked) {
	  featuresCost += threeDExtra[extrasIndex];
	  npbFeatures1 += threeDExtra[npbExtra1];
	  npbFeatures2 += threeDExtra[npbExtra2];
	  document.getElementById('threeDLabel').innerHTML = "3D Embroidery";
	  document.getElementById('threeDPrice').innerHTML = "+ $" + threeDExtra[extrasIndex].toFixed(2) + " each";
	  document.getElementById('threeDPrice-hidden').value = threeDExtra[extrasIndex].toFixed(2);
	} else {
    document.getElementById('threeDLabel').innerHTML = "";
	  document.getElementById('threeDPrice').innerHTML = "";
	}
	
	if (document.getElementById('Blending').checked) {
	  featuresCost += blendingExtra[extrasIndex];
	  npbFeatures1 += blendingExtra[npbExtra1];
	  npbFeatures2 += blendingExtra[npbExtra2];
	  document.getElementById('blendingLabel').innerHTML = "Thread Blending";
	  document.getElementById('blendingPrice').innerHTML = "+ $" + blendingExtra[extrasIndex].toFixed(2) + " each";
	  document.getElementById('blendingPrice-hidden').value = blendingExtra[extrasIndex].toFixed(2);
	} else {
	  document.getElementById('blendingLabel').innerHTML = "";
	  document.getElementById('blendingPrice').innerHTML = "";
	}
	
	if (document.getElementById('Metallic-Thread').checked) {
	  featuresCost += metallicExtra[extrasIndex];
	  npbFeatures1 += metallicExtra[npbExtra1];
	  npbFeatures2 += metallicExtra[npbExtra2];
	  document.getElementById('metallicLabel').innerHTML = "Metallic Thread";
	  document.getElementById('metallicPrice').innerHTML = "+ $" + metallicExtra[extrasIndex].toFixed(2) + " each";
	  document.getElementById('metallicPrice-hidden').value = metallicExtra[extrasIndex].toFixed(2);
	} else {
	  document.getElementById('metallicLabel').innerHTML = "";
	  document.getElementById('metallicPrice').innerHTML = "";
	}
	
	if (document.getElementById('Glow-in-the-Dark').checked) {
	  featuresCost += glowExtra[extrasIndex];
	  npbFeatures1 += glowExtra[npbExtra1];
	  npbFeatures2 += glowExtra[npbExtra2];
	  document.getElementById('glowLabel').innerHTML = "Glow in the Dark";
	  document.getElementById('glowPrice').innerHTML = "+ $" + glowExtra[extrasIndex].toFixed(2) + " each";
	  document.getElementById('glowPrice-hidden').value = glowExtra[extrasIndex].toFixed(2);
	} else {
	  document.getElementById('glowLabel').innerHTML = "";
	  document.getElementById('glowPrice').innerHTML = "";
	}
	
	if (document.getElementById('Button-Loop').checked) {
	  featuresCost += buttonLoopExtra[extrasIndex];
	  npbFeatures1 += buttonLoopExtra[npbExtra1];
	  npbFeatures2 += buttonLoopExtra[npbExtra2];
	  document.getElementById('buttonLoopLabel').innerHTML = "Button Loop";
    document.getElementById('buttonLoopPrice').innerHTML = "+ $" + buttonLoopExtra[extrasIndex].toFixed(2) + " each";
    document.getElementById('buttonLoopPrice-hidden').value = buttonLoopExtra[extrasIndex].toFixed(2);
	} else {
	  document.getElementById('buttonLoopLabel').innerHTML = "";
	  document.getElementById('buttonLoopPrice').innerHTML = "";
	}
*/
  // now calculate the final per piece cost
  
  ppPrice = pricingArr[priceIndex] + backingCost + hpsPrice + featuresCost;
  document.getElementById('basePrice-hidden').value = pricingArr[priceIndex].toFixed(2);
  document.getElementById('ppPrice-hidden').value = ppPrice.toFixed(2);
  document.getElementById('totalPrice-hidden').value = (ppPrice * quantity).toFixed(2);
  

  // display the prices in the form
  //alert(size);
  //alert('2');
  document.getElementById('basePriceLabel').innerHTML = quantity + " piece price";
  document.getElementById('basePrice').innerHTML = "$" + pricingArr[priceIndex].toFixed(2) + " each";
  document.getElementById('ppprice').innerHTML = "$" + ppPrice.toFixed(2) + " each";
  document.getElementById('subtotal').innerHTML = "$" + (ppPrice * quantity).toFixed(2);

  // display additional price breaks (if they are within the quantity range)
  if (npbIndex1 != null && npbExtra1 != null && npbExtra2 !=null) {
    // 1st additional price break
	
    document.getElementById('npbLabel1pp').innerHTML = npbArr[npbIndex1] + " Piece Price";
    document.getElementById('npbLabel1t').innerHTML = npbArr[npbIndex1] + " Piece Total";
    var npbPerPiece1 = pricingArr[npbIndex1] + npbBacking1 + npbHpsPrice1 + npbFeatures1;
    document.getElementById('npbPrice1pp').innerHTML = "$" + npbPerPiece1.toFixed(2) + " each";
    document.getElementById('npbPrice1t').innerHTML = "$" + (npbPerPiece1.toFixed(2) * npbArr[npbIndex1]).toFixed(2);
    document.getElementById('npbpp-hidden').value = npbPerPiece1.toFixed(2);
    document.getElementById('npbt-hidden').value = (npbPerPiece1.toFixed(2) * npbArr[npbIndex1]).toFixed(2);
	document.getElementById('npblabel-hidden').value = npbArr[npbIndex1];
    // 2nd additional price break
    document.getElementById('npbLabel2pp').innerHTML = npbArr[npbIndex1 + 1] + " Piece Price";
    document.getElementById('npbLabel2t').innerHTML = npbArr[npbIndex1 + 1] + " Piece Total"
    var npbPerPiece2 = pricingArr[npbIndex1 + 1] + npbBacking2 + npbHpsPrice2 + npbFeatures2;
    document.getElementById('npbPrice2pp').innerHTML = "$" + npbPerPiece2.toFixed(2) + " each";
    document.getElementById('npbPrice2t').innerHTML = "$" + (npbPerPiece2.toFixed(2) * npbArr[npbIndex1 + 1]).toFixed(2);
    document.getElementById('npbRow1').className = "w-row rowline";
    document.getElementById('npbTooManyNote').innerHTML = "";
    document.getElementById('npbTooManyBottom').innerHTML = "";
  } else if (npbIndex1 != null && npbExtra1 != null && npbExtra2 == null) {
  // only the 2nd price break is out of range
    document.getElementById('npbTooManyNote').innerHTML = "";
    document.getElementById('npbLabel1pp').innerHTML = npbArr[npbIndex1] + " Piece Price";
    document.getElementById('npbLabel1t').innerHTML = npbArr[npbIndex1] + " Piece Total";
    var npbPerPiece1 = pricingArr[npbIndex1] + npbBacking1 + npbHpsPrice1 + npbFeatures1;
    document.getElementById('npbPrice1pp').innerHTML = "$" + npbPerPiece1.toFixed(2) + " each";
    document.getElementById('npbPrice1t').innerHTML = "$" + (npbPerPiece1.toFixed(2) * npbArr[npbIndex1]).toFixed(2);
    document.getElementById('npbpp-hidden').value = npbPerPiece1.toFixed(2);
    document.getElementById('npbt-hidden').value = (npbPerPiece1.toFixed(2) * npbArr[npbIndex1]).toFixed(2);
	document.getElementById('npblabel-hidden').value = npbArr[npbIndex1];
    // and deal with the 2nd price break that is out of range
    document.getElementById('npbTooManyBottom').innerHTML = 'Please use our <a href="request-quote.html">quote request form</a> for quantities above 2000 pieces.';
    document.getElementById('npbLabel2pp').innerHTML = "";
    document.getElementById('npbLabel2t').innerHTML = "";
    document.getElementById('npbPrice2pp').innerHTML = "";
    document.getElementById('npbPrice2t').innerHTML = "";
    document.getElementById('npbRow1').className = "w-row rowline";
  } else {  // both higher price breaks are out of quantity range
    document.getElementById('npbTooManyNote').innerHTML = 'Please use our <a href="request-quote.html">quote request form</a> for quantities above 2000 pieces.';
    document.getElementById('npbRow1').className = "w-row";
    document.getElementById('npbLabel1pp').innerHTML = "";
    document.getElementById('npbLabel1t').innerHTML = "";
    document.getElementById('npbPrice1pp').innerHTML = "";
    document.getElementById('npbPrice1t').innerHTML = "";
    document.getElementById('npbLabel2pp').innerHTML = "";
    document.getElementById('npbLabel2t').innerHTML = "";
    document.getElementById('npbPrice2pp').innerHTML = "";
    document.getElementById('npbPrice2t').innerHTML = "";
    document.getElementById('npbTooManyBottom').innerHTML = "";
    document.getElementById('npbpp-hidden').value = "N/A";
    document.getElementById('npbt-hidden').value = "N/A";
	document.getElementById('npblabel-hidden').value = "(too high for the quote machine)";
  }

}// end calcPrice()

function noneChecked() { // for managing the checkboxes in an interesting way
  document.getElementById('3D-Embroidery').checked = false;
  document.getElementById('Blending').checked = false;
  document.getElementById('Metallic-Thread').checked = false;
  document.getElementById('Glow-in-the-Dark').checked = false;
  document.getElementById('Button-Loop').checked = false;

  // now calculate the price again because features changed
  calcPrice();
} // end noneChecked()

function otherChecked() {
  document.getElementById('None').checked = false;

  // now calculate the price again because features changed
  calcPrice();
} // end otherChecked()

function setDefaults() {
  document.getElementById('Quantity').value = 100;
  document.getElementById('sizeWidth').value = 3;
  document.getElementById('sizeHeight').value = 3;
  calcPrice();
}