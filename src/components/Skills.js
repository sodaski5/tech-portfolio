import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming Tools: Java, JavaScript, Node.js, Python, TypeScript, C#, XML<br></br>JavaScipt Tools: Node.js, ES13, React, Next.js, Vue.js, Angular, Babel, Express, CORS.<br></br> Java Tools: Java, Java EE, JDBC, Spring Boot<br></br>Frontend Tools: HTML5, CSS3, BootStrap5, tailwindCSS, Material UI, Clerk, schadcn<br></br>Pythons Tools: Python 3.11, PIP, Django, Flask, SQL Alchemy, Requests, Alembic<br></br>Cloud Computing Tools: AWS, GCP, Terraform, Kubernetes, Docker<br></br>Automation / Testing Tools: Jenkins, Postman, Robot, JUnit, Jtest, Pytest<br></br>Database Tools: PostgresSQL, MySQL, SQL, MongoDB, SQLite, DynamoDB <br></br>Data Science Tools: Numpy, Scipy, Scikit-learn, Pandas, Matplotlib, PySpark, PyTorch<br></br>Agile Workflow Tools: GIT Hub, GIT Lab, Atlassian Jira, Confluence, Slack, MicrosoftOffice<br></br>Programming Concepts: SOLID, OOP, MVC, DRY<br></br>IDE Tools: PyCharm, Visual Studio Code, Spider</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Frontend Engineering</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Cloud Computing</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>PV Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Backend Engineering</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
