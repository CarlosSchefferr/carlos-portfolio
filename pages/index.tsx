import type { NextPage } from "next";
import styles from "./index.module.css";

const Fleetsummary: NextPage = () => {
  return (
    <div className={styles.fleetsummary}>
      <img className={styles.fleetsummaryChild} alt="" src="/rectangle-1.svg" />
      <header className={styles.contactInfo}>
        <div id="Home" className={styles.carlin}>
          <h1 className={styles.carlosdev}>Carlos.dev</h1>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.additionalData}>
            <div className={styles.notificationIconAreaParent}>
              <div className={styles.notificationIconArea}>
                <div className={styles.userSettings}>
                  <div className={styles.userSettings1}>
                    <h1 className={styles.softwareEngineer}>Software engineer</h1>
                    <div className={styles.serviceLinkIcon}>
                      <h1 className={styles.h1}>👋</h1>
                    </div>
                  </div>
                  <div className={styles.notificationCountArea}>
                    <div className={styles.sidebarItems}>
                      <b className={styles.hiImCarlos}>
                        Oi. Meu nome é Carlos Augusto. Um apaixonado por programação e Tecnologia. Atualmente morando em Criciúma, Brasil📍
                      </b>
                      <div className={styles.serviceLinks}>
                        <div className={styles.div}>ㅤ</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image1Parent}>
                    <a href="https://www.linkedin.com/in/carlosaugustodev/">
                      <img className={styles.image1Icon} loading="lazy" alt="linkedin" src="/image-1@2x.png" />
                    </a>
                    <a href="https://github.com/CarlosSchefferr">
                      <img className={styles.image2Icon} loading="lazy" alt="github" src="/image-2@2x.png" />
                    </a>
                  </div>
                </div>
              </div>
              <img className={styles.image12Icon} loading="lazy" alt="" src="/image-12@2x.png" />
            </div>
          </div>

          {/* Seção de Tech Stack */}
          <div className={styles.techStackContent}>
            <div className={styles.techStackWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.accountSettingsParent}>
                    <div id="About" className={styles.accountSettings}>
                      <b className={styles.techStack}>Tech Stack</b>
                    </div>
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.image3Wrapper}>
                  <img className={styles.image3Icon} loading="lazy" alt="" src="/image-3@2x.png" />
                </div>
                <div className={styles.image4Wrapper}>
                  <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
                </div>

                <div className={styles.image11Wrapper}>
                  <img className={styles.image11Icon} loading="lazy" alt="" src="/image-11@2x.png" />
                </div>

                <div className={styles.image14Wrapper}>
                  <img className={styles.image14Icon} loading="lazy" alt="" src="/image-14@2x.png" />
                </div>

                <img className={styles.image5Icon} loading="lazy" alt="" src="/image-5@2x.png" />
                <div className={styles.image6Wrapper}>
                  <img className={styles.image6Icon} loading="lazy" alt="" src="/image-6@2x.png" />
                </div>
                <div className={styles.userProfileArea}>
                  <img className={styles.image7Icon} loading="lazy" alt="" src="/image-7@2x.png" />
                </div>
                <div className={styles.image9Wrapper}>
                  <img className={styles.image9Icon} loading="lazy" alt="" src="/image-9@2x.png" />
                </div>
                <div className={styles.image8Wrapper}>
                  <img className={styles.image8Icon} loading="lazy" alt="" src="/image-8@2x.png" />
                </div>
                <div className={styles.reportTitleArea}>
                  <img className={styles.image10Icon} loading="lazy" alt="" src="/image-10@2x.png" />
                </div>
              </div>

              {/* Seção "Sobre Mim" */}
              <div className={styles.rectangleParent}>
                <img className={styles.frameItem} loading="lazy" alt="" src="/rectangle-2@2x.png" />
                <div className={styles.reportDataTableWrapper}>
                  <div className={styles.reportDataTable}>
                    <div className={styles.reportDataTableInner}>
                      <div className={styles.frameGroup}>
                        <div className={styles.aboutMeWrapper}>
                          <div className={styles.aboutMe}>
                            <span>ABOUT ME</span>
                            <span>{` `}</span>
                          </div>
                        </div>
                        <div className={styles.hiImCarlosAugustoAPassParent}>
                          <b className={styles.hiImCarlos1}>
                            Apaixonado por programação e tecnologia. Atualmente morando em Criciúma, Brasil📍
                          </b>
                          <div className={styles.wrapper}>
                            <div className={styles.div1}>ㅤ</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.hiImCarlos2}>
                      Desde pequeno sempre estive conectado com tecnologia e o mundo da internet. Isso sempre
                      tem sido meu maior hobby. Hoje em dia sou um jovem estudante, atualmente cursando Engenharia de Software na UNISATC. 
                      Apaixonado por programação e com certas
                      habilidades em HTML, CSS, Laravel/PHP, MySQL, PostgreSQL, Bootstrap, Javascript, Typescript, React, 
                      NodeJS , Python, Java e Figma.
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção de Experiências */}
              <div className={styles.experienceSection}>
                <div className={styles.experienceWrapper}>
                  <h2 className={styles.experienceTitle}>Experiências</h2>
                  <ul className={styles.experienceList}>
                    <li>
                      <b>Estágio em Desenvolvimento Web</b> - Exon Sistemas (2024)
                      <p>Desenvolvimento e manutenção de aplicações web usando PHP e Laravel.</p>
                    </li>
                    <li>
                      <b>Freelancer</b> - Desenvolvimento de Loja Online (2023)
                      <p>Criação de um e-commerce de cangas para um cliente, incluindo design e implementação.</p>
                    </li>
                    {/* Adicione mais experiências conforme necessário */}
                  </ul>
                </div>
              </div>

              <div className={styles.mainContentArea}>
                <div className={styles.additionalDataHeading}>
                  <div className={styles.portfolioVisitInnerWrapper}>
                    <div className={styles.portfolioVisitInnermostWrap}>
                      <img className={styles.capturaDeTela20240513232} alt="" src="/captura-de-tela-20240513-232255-1@2x.png" />
                      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
                    </div>
                  </div>
                  <div className={styles.thankYouFor}>
                    Thank you for your visit to my personal portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé */}
          <div className={styles.reportOptions}>
            <div className={styles.talkToMe}>{`TALK TO ME! `}</div>
            <div className={styles.contactWays}>CONTACT WAYS</div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.dataRowsParent}>
                    <div className={styles.dataRows}>
                      <img
                        className={styles.icons8Whatsapp1}
                        loading="lazy"
                        alt=""
                        src="/icons8whatsapp-1@2x.png"
                      />
                      <div className={styles.specificVehicleFilter}>
                        <b className={styles.b}>+55 51 99004-1021</b>
                      </div>
                    </div>
                    <div className={styles.dataRows1}>
                      <img
                        className={styles.icons8NovaMensagem1}
                        loading="lazy"
                        alt=""
                        src="/icons8novamensagem-1@2x.png"
                      />
                      <div className={styles.specificVehicleFilter}>
                        <b className={styles.b}>carlosschefferr@hotmail.com</b>
                      </div>
                    </div>
                    <div className={styles.dataRows2}>
                      <img
                        className={styles.icons8Location1}
                        loading="lazy"
                        alt=""
                        src="/icons8location-1@2x.png"
                      />
                      <div className={styles.specificVehicleFilter}>
                        <b className={styles.b}>Criciúma - SC</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.copyRight}>© 2024 Carlos Scheffer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fleetsummary;
