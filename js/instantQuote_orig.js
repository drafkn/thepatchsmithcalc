<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/webflow.css">
  <link rel="stylesheet" type="text/css" href="css/webflow_2.css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
  <script>
    WebFont.load({
      google: {
        families: ["Montserrat:400,700","Bitter:400,700,400italic","Ubuntu:300,300italic,400,400italic,500,500italic,700,700italic","Droid Serif:400,700","Vollkorn:400,400italic,700,700italic"]
      }
    });
  </script>
  <script type="text/javascript" src="js/modernizr.js"></script>
  <script type="text/javascript" src="js/addEmailAddr.js"></script>
  <script type="text/javascript" src="js/instantQuote.js"></script>
</head>

<body>

<div class="w-section backgroundcolor">
    <div class="w-container">
      <div class="w-form">
          <h1 class="h1-centered">ThePatchSmith Instant Quote</h1>
          <h1 class="quote-header"></h1>
          <h3 class="h3-bit-bigger"></h3>
          <div class="w-row">
            	<div class="w-row">
                <div class="w-col w-col-6">
                  <label class="quotelabel" for="Quantity">How many patches?</label>
                  <input class="w-input" id="Quantity" type="number" min="1" placeholder="100" name="Quantity" required="required" data-name="Quantity" onchange="calcPrice();">
                  <div id="maxQtyMessage" class="quotelabel pricedisclaimer alert"></div>
                  <label class="quotelabel">Size (in inches)</label>
                  <div class="quotelabel pricedisclaimer note">The width and height are averaged in the pricing calculation.</div>
                  <div class="w-row">
                    <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <label class="sizelabel" for="sizeHeight">Height:</label>
                    </div>
                    <div class="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                      <input class="w-input" id="sizeHeight" type="number" min="0.25" step="0.005" name="sizeHeight" required="required" data-name="sizeHeight" onchange="calcPrice();">
                    </div>
                    <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <label class="sizelabel" for="sizeWidth">Width:</label>
                    </div>
                    <div class="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                      <input class="w-input" id="sizeWidth" type="number" min="0.25" step="0.005" name="sizeWidth" required="required" data-name="sizeWidth" onchange="calcPrice();">
                    </div>
                  </div>
                  <div class="h3-bit-bigger priceblock italic" id="avgSize">(Averaged Size is 4 inches)</div>
                  <div id="maxSizeMessage" class="quotelabel pricedisclaimer alert"></div>
                  <div id="otherSizeMessage" class="quotelabel pricedisclaimer alert"></div>
                  
                  <label class="quotelabel" for="embroideryAmount">Amount of Embroidery</label>
                  <select class="w-select" id="embroideryAmount" name="embroideryAmount" data-name="embroideryAmount" required="required" onchange="calcPrice();">
                    <option value="Up to 99% embroidered">Up to 99% embroidered</option>
                    <option value="100% embroidered">100% embroidered</option>
                  </select>
                  <label class="quotelabel" for="Backing">Backing</label>
                  <select class="w-select" id="Backing" name="Backing" data-name="Backing" required="required" onchange="calcPrice();">
                    <option value="No backing (sew on)">No backing (sew on)</option>
                    <option value="Velcro Backing">Velcro</option>
                    <option value="Iron On / Heat Seal">Iron On / Heat Seal</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Peel and Stick Adhesive">Peel and Stick Adhesive</option>
                  </select>
                  <div class="quotelabel pricedisclaimer note" id="backingNote"></div>
                  <label class="quotelabel">Special Features</label>
                  <div class="w-row">
                    <div class="w-col w-col-6">
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="None" type="checkbox" name="None" data-name="None" checked="checked" onchange="noneChecked();">
                        <label class="w-form-label cblabel" for="None">None</label>
                      </div>
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="3D-Embroidery" type="checkbox" name="3D-Embroidery" data-name="3D Embroidery" onchange="otherChecked();">
                        <label class="w-form-label cblabel" for="3D-Embroidery">3D Embroidery</label>
                      </div>
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="Blending" type="checkbox" name="Blending" data-name="Blending" onchange="otherChecked();">
                        <label class="w-form-label cblabel" for="Blending">Blending</label>
                      </div>
                    </div>
                    <div class="w-col w-col-6">
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="Metallic-Thread" type="checkbox" name="Metallic-Thread" data-name="Metallic Thread" onchange="otherChecked();">
                        <label class="w-form-label cblabel" for="Metallic-Thread">Metallic Thread</label>
                      </div>
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="Glow-in-the-Dark" type="checkbox" name="Glow-in-the-Dark" data-name="Glow in the Dark" onchange="otherChecked();">
                        <label class="w-form-label cblabel" for="Glow-in-the-Dark">Glow in the Dark</label>
                      </div>
                      <div class="w-checkbox w-clearfix">
                        <input class="w-checkbox-input" id="Button-Loop" type="checkbox" name="Button-Loop" data-name="Button Loop" onchange="otherChecked();">
                        <label class="w-form-label cblabel" for="Button-Loop">Button Loop</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-col w-col-6">
                    <div class="grayblock">
                        <div class="centered h3-bit-bigger">Your Price:</div>
                    <div class="w-row rowline">
                      <div class="w-col w-col-7 w-col-small-7 w-col-tiny-7">
                        <h3 class="h3-bit-bigger priceblock" id="basePriceLabel">100 piece price</h3>
                        <h3 class="h3-bit-bigger priceblock" id="extraEmbroideryLabel"></h3>
                        <h3 class="h3-bit-bigger priceblock" id="backingLabel">No Backing</h3>
                        <h3 class="h3-bit-bigger priceblock" id="threeDLabel"></h3>
                        <h3 class="h3-bit-bigger priceblock" id="blendingLabel"></h3>
                        <h3 class="h3-bit-bigger priceblock" id="metallicLabel"></h3>
                        <h3 class="h3-bit-bigger priceblock" id="glowLabel"></h3>
                        <h3 class="h3-bit-bigger priceblock" id="buttonLoopLabel"></h3>
                      </div>
                      <div class="w-col w-col-5 w-col-small-5 w-col-tiny-5">
                        <h3 class="h3-bit-bigger priceblock rightjust" name="basePrice" id="basePrice">$1.94 each</h3>
                        <h3 class="priceblock rightjust h3-bit-bigger" name="extraEmbroideryPrice" id="extraEmbroideryPrice"></h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="backingPrice" id="backingPrice">Free</h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="threeDPrice" id="threeDPrice"></h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="blendingPrice" id="blendingPrice"></h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="metallicPrice" id="metallicPrice"></h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="glowPrice" id="glowPrice"></h3>
                        <h3 class="h3-bit-bigger priceblock rightjust" name="buttonLoopPrice" id="buttonLoopPrice"></h3>
                      </div>
                    </div>
                    <div class="w-row rowline">
                      <div class="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                        <div class="quotelabel showprice">Per Piece</div>
                        <div class="quotelabel showprice">Setup</div>
                        <div class="quotelabel showprice">Total</div>
                      </div>
                      <div class="w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                        <div class="quotelabel showprice rightjust" id="ppprice">$1.94 each</div>
                        <div class="quotelabel showprice rightjust" id="setupFree">FREE</div>
                        <div class="quotelabel showprice rightjust" id="subtotal">$194.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
</div>            




</body>
</html>