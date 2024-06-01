import pwgen from '../assets/generate_pw_snip.png'
import sched_snip from '../assets/scheduler_snip.png'
function Projects() {
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <div className="project">
            <a href="https://github.com/YuliiaPylypiv/Project-1.git">
                <h2 className="project-name">binary-brigade</h2>
            <img src="js.files/1087815.png" alt="P1" />
            </a>
        </div>
        <div className="project">
            <a href="https://github.com/YuliiaPylypiv/friendly-parakeet.git">
                <h2 className="project-name">friendly-parakeet</h2>
            <img src="js.files/images.jpg" alt="P2" />
            </a>
        </div>
        <div className="project">
            <a href="https://github.com/YuliiaPylypiv/Flight-trackerY.git/">
                <h2 className="project-name">Flight-trackerY
</h2>
            <img src="js.files/images.png" alt="P3" />
            </a>
        </div>
      </div>
    );
  }

  export default Projects;
