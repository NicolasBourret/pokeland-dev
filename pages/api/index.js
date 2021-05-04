// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  var myFetch = fetch("https://pokepast.es/cdde82a1eb9838e6");

  myFetch.then(function (response) {
    return response.text().then((text) => {
      console.log(
        text.match(/<img class="img-pokemon" src="\/img\/pokemon\/.+\.png">/g)
      );
    });
  });
  res.status(200).json({ name: "John Doe" });
};
