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
              <p className="experience-card__duration">2017/3</p>
              <p className="experience-card__content">
                学部卒で卒業研究は「Twitterのデータ分析」を1から一人でやりました。
                <br />
                PythonとTwitterのREST
                APIとMecab(形態素分析)は全て初めて使用しましたが、数ヶ月で実装できました。
              </p>
            </div>
            <div className="experience-card">
              <h3 className="experience-card__title">
                株式会社 アルプス技研 入社
              </h3>
              <p className="experience-card__duration">2017/4</p>
              <p className="experience-card__content">
                入社した理由は、技術力を東京のいろんな会社に派遣されて学ぼうと考えていました。
                <br />
                3ヶ月神奈川県で研修した後、茨城県の某H社の研究所に派遣が決まりました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">
                IoT機器のセキュリティ情報を収集し、管理するシステムの構築(派遣)
              </h3>
              <p className="experience-card__duration">
                2017/7 - 2018/12 (1年5ヶ月)
              </p>
              <p className="experience-card__content">
                環境: Ubuntuのデスクトップ2つ、RasPi 4つ、IoTGateWay 3つ
                <br />
                使用技術/使用言語: C言語, C++, Java, Python, Bash, Node.js,
                HTML/CSS, PostgreSQL, Node-RED
                <br />
                「IoT機器のセキュリティ情報を収集し、管理するシステムの構築」を行いました。
                <br />
                技術的には、を使用しました。
                <br />
                Linux初心者というレベルから様々な言語でプログラムを書く経験をさせてもらいWEBの業務もやらせていただきました。
                <br />
                WEBの業務をやった時に、「コレだ！WEB好きだ！」という感覚がありました。
                <br />
                なのでWEBをもっと勉強しWEB系の会社に転職し好きなことを仕事にしようと思い転職を行いました。
              </p>
            </div>
            <div className="experience-card">
              <h3 className="experience-card__title">
                ハコレコドットコム株式会社 入社
              </h3>
              <p className="experience-card__duration">2019/1 - 現在</p>
              <p className="experience-card__content">
                転職理由は2つあります。
                <br />
                1つ目は、結婚して子供ができたので妻の実家の「函館」でWEB系の会社を探していたこと。
                <br />
                2つ目は新しい技術のReactやVue.jsを取り扱っていること
                <br />
                今後も次々と新しい技術をやりたいということが決め手になりました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">
                幼稚園のサイトのYoutubeLive管理画面の構築
              </h3>
              <p className="experience-card__duration">
                2019/2 - 2019/4 (2ヶ月)
              </p>
              <p className="experience-card__content">
                使用技術/使用言語: Laravel, HTML/CSS, MySQL
                <br />
                以下のように問題を解決していきました。
                <ul>
                  <li>
                    文字コードが3種類使用されていたところを1つ(UTF-8)に統一
                  </li>
                  <li>
                    既存に複数の管理ページが存在していたのでログイン画面を作り、管理ページを１つに統一
                  </li>
                  <li>
                    データがテキストファイルで保存されていたのでMySQLを使うように変更
                  </li>
                </ul>
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">プラン選定のシステム</h3>
              <p className="experience-card__duration">
                2019/5 - 2019/6 (2ヶ月)
              </p>
              <p className="experience-card__content">
                使用技術/使用言語: HTML/CSS/JavaScript, Pug, Stylus, Docker
                <br />
                フロントエンドのみ対応させていただきました。
                <br />
                ドラッグアンドドロップの技術が必要だったのでその辺りの良い経験ができました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">管理人の管理システム</h3>
              <p className="experience-card__duration">
                2019/7 - 2020/6 (11ヶ月)
              </p>
              <p className="experience-card__content">
                使用技術/使用言語: Nuxt.js, TypeScript, AWS(Cognito, Amplify)
                <br />
                フロントエンドのみ対応させていただきました。
                <br />
                Nuxt.jsを使ってはいますがSPAにしてサーバーレスの環境で
                <br />
                ダッシュボードでデータの確認・変更ができるサイトを作らせていただきました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">
                デザイナーのギャラリーサイト
              </h3>
              <p className="experience-card__duration">
                2019/11 - 2020/1 (3ヶ月)
              </p>
              <p className="experience-card__content">
                使用技術/使用言語: Nuxt.js, TypeScript, Vue3
                <br />
                フロントエンドのみ対応させていただきました。
                <br />
                Vue3の書き方がシンプルで良かったのでVue3の書き方Composition
                APIで記述させていただきました。
                <br />
                ダッシュボードでデータの確認・変更ができるサイトを作らせていただきました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">
                量産コーディングのディレクション
              </h3>
              <p className="experience-card__duration">
                2020/7 - 2020/8 (2ヶ月)
              </p>
              <p className="experience-card__content">
                使用技術/使用言語: HTML
                <br />
                ディレクションをさせていただきました。
                <br />
                既存サイトのデザイン改修のプロジェクトでしたが仕様が決まり切っておらず作業者は作業しずらく
                <br />
                コミュニケーションのコストや管理のコストもかなり高く、良い経験になりました。
              </p>
            </div>
            <div className="experience-card -nest">
              <h3 className="experience-card__title">
                センサー情報を見える化する画面の制作
              </h3>
              <p className="experience-card__duration">2020/9 - 現在</p>
              <p className="experience-card__content">
                使用技術/使用言語: React, TypeScript,
                Ionic(ハイブリットアプリのフレームワーク)
                <br />
                フロントのみ
                <br />
                最終的にアプリで表現することも考え、Ionicというフレームワークを使用し、構築しています。
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .skill_wrap {
          width: 100%;
          max-width: 320px;
          height: 320px;
          margin: 0 auto;
        }
        .profileImage {
          border-radius: 100%;
          width: 100%;
          max-width: 300px;
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
        }
        h2 {
          font-size: 1.75rem;
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
        // .experience
        .experience {
          &-card {
            border-radius: 10px;
            padding: 20px;
            max-width: 500px;
            box-shadow: 0 2px 10px rgba(#000, 0.16);
            &:not(:last-of-type) {
              margin-bottom: 30px;
            }
            &__title {
              color: #555;
              margin: 8px 0;
            }
            &__duration {
              color: #aaa;
              font-size: 14px;
              margin: 0;
            }
            &__content {
              color: #777;
              line-height: 1.5;
            }
            &.-nest {
              margin-left: 30px;
            }
          }
        }
      `}</style>
    </Layout>
  );
}
