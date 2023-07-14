import React from "react";
import styles from "App.module.scss";

const Roadmap = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 5,
        position: "relative",
        color: "white",
        marginTop: "3rem",
      }}
    >
      <h1>Roadmap</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className={styles.roadmapCard}>
          <div className={styles.roadmapCardTitle}>
            <span role="img" aria-label="sheep" className={styles.emoji}>
              🌑
            </span>{" "}
            <h2>New moon</h2>
          </div>
          <ul className={styles.list}>
            <li>
              Conduct Market Research: Analyse the current crypto meta trends, identify target
              audience, and assess competitors.
            </li>
            <li>Define the core objectives, vision, and unique selling points of MegaMoon.</li>
            <li>
              Develop Tokenomics: Create a detailed plan for token distribution, allocation, and
              economic incentives with rewarding and deflationary built in mechanisms.
            </li>
            <li>
              Assemble a strong team of developers, marketers, community managers, advisors and
              moderators.
            </li>
            <li>
              Create the smart contract for the MegaMoon token. Implement essential token
              functionalities, including tokenomics, transaction fees, and distribution mechanisms.
            </li>
          </ul>
        </div>
        <div className={styles.roadmapCard}>
          <div className={styles.roadmapCardTitle}>
            <span role="img" aria-label="sheep" className={styles.emoji}>
              🌒
            </span>{" "}
            <h2>Waxing Crescent</h2>
          </div>
          <ul className={styles.list}>
            <li>
              Launch $MEGAM, including the TGE event, testing and deployment of smart contract.
            </li>
            <li>
              Integrate an auto buy threshold into the contract using real-time Chainlink price
              feeds.
            </li>
            <li>Renounce ownership of the contract to ensure transparency and decentralization.</li>
            <li>Lock liquidity for a 3-month extension to provide stability.</li>
            <li>
              Onboard Key Opinion Leaders (KOLs) on long-term deals to increase project visibility
              and credibility.
            </li>
            <li>
              Integrate the Mega Man game on the website for community engagement and fun use.
            </li>
            <li>Milestone: 500+ telegram members and 200+ token holders.</li>
          </ul>
        </div>
        <div className={styles.roadmapCard}>
          <div className={styles.roadmapCardTitle}>
            <span role="img" aria-label="sheep" className={styles.emoji}>
              🌓
            </span>{" "}
            <h2>First Quarter</h2>
          </div>
          <ul className={styles.list}>
            <li>
              Coingecko and CoinMarketCap: Apply for fast-track listing on Coingecko and
              CoinMarketCap to gain visibility within the crypto community.
            </li>
            <li>
              Live Data/Stats Integration: Develop a reliable system to provide real-time data and
              statistics on the MegaMoon website by implementing APIs.
            </li>
            <li>
              Community Prizes in Game: Integrate a gaming component into the project, offering
              community prizes and incentives for active participation.
            </li>
            <li>
              YouTube and TikTok Visual Campaign: Collaborate with influential YouTube content
              creators and TikTok influencers within the crypto space.
            </li>
            <li>
              Social Media Marketing: Implement a comprehensive social media strategy to boost the
              project&apos;s visibility and reach to “normies”.
            </li>
            <li>Milestone: 1200+ telegram members and 400+ token holders.</li>
          </ul>
        </div>
        <div className={styles.roadmapCard}>
          <div className={styles.roadmapCardTitle}>
            <span role="img" aria-label="sheep" className={styles.emoji}>
              🌔
            </span>{" "}
            <h2>Waxing Gibbous</h2>
          </div>
          <ul className={styles.list}>
            <li>
              <span style={{ color: "#23a4d7", fontSize: "18px" }}>THE MEGA SUPPLY SHOCK</span> is
              already upon us and FOMO is kicking in!
            </li>
            <li>Website re-design: improved branding, visuals, dashboard, etc.</li>
            <li>
              NFT Development: Design and develop a unique collection of NFTs associated with the
              MegaMoon project. Ensure that the NFTs align with the project&apos;s theme and provide
              value to token holders and collectors.
            </li>
            <li>
              NFT Marketplace Integration: Set-up with established NFT marketplaces for trading and
              showcasing MegaMoon NFTs. Focus on being verified as quickly as possible to prevent
              scams.
            </li>
            <li>
              NFT Marketing and Community Engagement: Organise promotional events and giveaways to
              distribute limited edition MegaMoon NFTs to the community.
            </li>
            <li>Milestone: 2500+ telegram members and 1000+ token holders</li>
          </ul>
        </div>
        <div className={styles.roadmapCard}>
          <div className={styles.roadmapCardTitle}>
            <span role="img" aria-label="sheep" className={styles.emoji}>
              🌕
            </span>{" "}
            <h2>The Full MEGAMOON</h2>
          </div>
          <ul className={styles.list}>
            <li>
              Use money from NFT sale to buyback a huge % of the supply! Some of which will be used
              to gamify and provide further utility to holders! Some of which will be used to do{" "}
              <span style={{ color: "#23a4d7", fontSize: "18px" }}>THE MEGA BURN</span>!
            </li>
            <li>Bridge to a Layer 2: gamify the project and provide further utility to holders.</li>
            <li>TBC</li>
            <li>Milestone: 5000+ telegram members and 5000+ token holders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
