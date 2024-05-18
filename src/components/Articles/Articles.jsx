/* eslint-disable react/prop-types */
import "./articles.css";
import Article from "../Article/Article.jsx";

function Articles() {
  const data = [
    {
      title: "Relentless Innovation",
      descr: [
        "We constantly push, rethink, and rework to deliver 10x further than where we are now. Our relentless pursuit of innovation drives us ensuring our platform remains at the forefront of crypto and Web3 technology.",
        "At Cosmomoll, we embrace the future of finance with cutting-edge tools and seamless experiences, empowering you with smarter invoicing, effortless exchanges, and seamless withdrawals to thrive in the evolving digital economy.",
      ],
    },
    {
      title: "Simplify Crypto Finance",
      descr: [
        "Unlocking the full potential of crypto and Web3 with cutting-edge tools, dedicated support, and exciting opportunities.",
        "Our platform empowers businesses to invoice, exchange, and withdraw cryptocurrencies with ease. With our next-generation payment gateway, you'll have the flexibility to receive crypto payments, seamlessly convert them within your dashboard, and withdraw to your wallet with confidence.",
      ],
    },
  ];

  return (
    <div className="articles">
      <Article {...data[0]} />
      <Article {...data[1]} />
    </div>
  );
}

export default Articles;
