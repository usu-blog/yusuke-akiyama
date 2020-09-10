import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Rader from "../components/Rader";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <div className="profileImage"></div>
          <h1>秋山 裕介</h1>
          <span className="handle">フロントエンドエンジニア</span>
          <SocialList />
          <p>
            好きなものは、ReactとFirebaseでServerlessのサービスを作ること。
            <br />
            世の中にある多くの課題をITの力で効率化・自動化・見える化して役に立つものを作り、解決していきたい。
            <br />
            無駄なことをなくし、本来やるべき本質的な仕事に集中できる世の中にしたい。
            <br />
          </p>
          <h2>Profile</h2>
          <dl className="profile-list">
            <dt>生年月日</dt>
            <dd>1993/04/24</dd>
            <dt>最終学歴</dt>
            <dd>同志社大学 理工学部</dd>
            <dt>出身</dt>
            <dd>広島県</dd>
            <dt>趣味</dt>
            <dd>プログラミング・読書</dd>
            <dt>好きなもの</dt>
            <dd>React, Firebase, 成長, 家族</dd>
          </dl>
          <h2>Skill</h2>
          <div className="skill_wrap">
            <Rader />
          </div>
          <h2>Exerience</h2>
          <div className="experience">
            <div className="experience-card">
              <h3 className="experience-card__title">
                同志社大学 理工学部 卒業
              </h3>
              <p className="experience-card__content">
                学部卒で卒業研究は「Twitterのデータ分析」を1から一人でやりました。
                <br />
                PythonとTwitterのREST
                APIとMecab(形態素分析)は全て初めて使用しましたが、数ヶ月で実装できました。
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .skill_wrap {
          width: 400px;
          height: 400px;
          margin: 0 auto;
        }
        .profileImage {
          border-radius: 100%;
          width: 300px;
          height: 300px;
          background: url(/images/MyProfileImage.jpg) center / cover no-repeat;
          margin: 0 auto 30px;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
          margin-bottom: 30px;
        }
        .profile-list {
          display: grid;
          grid-template: auto / 140px 1fr;
          dt,
          dd {
            padding: 30px;
            &:not(:first-of-type) {
              border-top: 1px solid #ccc;
            }
          }
          dt {
            grid-column: 1;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
              height: 50%;
              width: 1px;
              background-color: #ccc;
            }
          }
          dd {
            margin: 0;
            grid-column: 2;
          }
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
