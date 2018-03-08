var brands = [
    "AmazonBasics"
]

console.log("amazon-brands script loaded");

// TODO: support multiple result containers
var resultContainer = document.getElementById("atfResults");
var replacable = resultContainer.getElementsByTagName("h2");
for (var i = 0; i < replacable.length; i++)
{
    var inner = replacable[i].innerHTML;
    for (var b = 0; b < brands.length; b++)
    {
        if (inner.match(new RegExp(brands[b], 'i')))
        {
            replacable[i].innerHTML = "[AMZN] " + inner;
            break;
        }
    }
}

console.log("amazon-brands script finished");
