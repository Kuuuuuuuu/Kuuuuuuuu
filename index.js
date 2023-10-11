const path = require("path");
const { writeFile } = require("fs/promises");

(async () => {
  try {
    const response = await fetch("https://api.github.com/users/Kuuuuuuuu");
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const json = await response.json();
    if (!json) {
      throw new Error("Failed to parse JSON data");
    }
    const date = new Date();
    const text = `
<h3><b>Hi there, I'm Nayuki</b></h3>
<p><b>👋 Welcome to my profile!</b></p>
<p>👀 I'm Student, Developer and Gamer</p>
<p>⚠️ Disclaimer: I have only one account, which is this one.</p>

<h4>🌻 Discord: <a href="https://discord.com/users/568093374662311956">@nayuki.</a></h4>
<h4>📫 Email: <a href="mailto:me@nayuki.cyou">me@nayuki.cyou</a></h4>
<h4>🔗 Website: <a href="https://nayuki.cyou">https://nayuki.cyou</a></h4>

<hr/>
<a href="#">
    <img alt="count" src="https://moe-counter.glitch.me/get/@MelidaZ?theme=rule34"/>
</a>
<br/>
<br/>
<a href="https://wakatime.com/@f0797c6d-4099-4a7f-947c-a8144dcd6348">
    <img alt="wakatime" src="https://wakatime.com/badge/user/f0797c6d-4099-4a7f-947c-a8144dcd6348.svg"/>
</a>
<br/>
<a href="https://user-badge.committers.top/thailand/Kuuuuuuuu">
    <img alt="wakatime" src="https://user-badge.committers.top/thailand/Kuuuuuuuu.svg"/>
</a>
<br/>
<a href="#">
    <img alt="lanyard" src="https://lanyard.cnrad.dev/api/568093374662311956"/>
</a>
<br/>
<h4>📊 My GitHub Stats</h4>
<h5><b>🕒 Last Update: ${date.toLocaleString("en-US", {
      timeZone: "Asia/Bangkok",
    })}</b></h5>
<ul>
    <li>Followers: ${json.followers}</li>
    <li>Following: ${json.following}</li>
    <li>Public Repo: ${json.public_repos}</li>
    <li>Public Gists: ${json.public_gists}</li>
</ul>
<h4>🛠️ My Dev Stacks</h4>
<ul>
    <li>Programming Languages: JavaScript, TypeScript, PHP, Java, C#, C</li>
    <li>Frameworks: Vite.js, React.js, Node.js, Discord.js, Bootstrap, Chakra UI, TailwindCSS</li>
    <li>Tools: Git, Docker, zsh, VSCode</li>
    <li>IDEs: IntelliJ IDEA, PhpStorm, WebStorm, Rider</li>
    <li>Etc: Cloudflare, Vercel, Railway, AWS, Snyk, Grafana, MariaDB, PHPMyAdmin</li>
    <li>Currently Learning: Elixir, C++, Flutter, Next.js</li>
</ul>
<br/>
<details>
    <summary>More Info!</summary>
    <br/>
    <br/>
    <a href="#">
        <div align="center">
            <img alt="github" src="https://github-readme-stats.vercel.app/api?username=Kuuuuuuuu&show_icons=true&include_all_commits=true&line_height=28.5&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
            <br/>
            <img alt="github" src="https://github-readme-stats.vercel.app/api/top-langs?username=Kuuuuuuuu&langs_count=15&layout=compact&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
            <br/>
            <img alt="trophy" src="https://github-profile-trophy.vercel.app/?username=Kuuuuuuuu&row=2&column=4&theme=algolia"/>
            <br/>
            <img alt="streak" src="https://github-readme-streak-stats.herokuapp.com/?user=Kuuuuuuuu&theme=dark&background=191970"/>
            <br/>
            <img alt="activity" src="https://github-readme-activity-graph.cyclic.app/graph?username=Kuuuuuuuu&bg_color=191970&theme=github"/>
            <br/>
            <img alt="repo" src="https://github-contributor-stats.vercel.app/api?username=Kuuuuuuuu&show_icons=true&include_all_commits=true&line_height=28.5&count_private=true&title_color=82CAFF&icon_color=82CAFF&bg_color=191970&theme=nord"/>
        </div>    
    </a>
</details>`;
    await writeFile(path.join(__dirname, "README.md"), text);
    console.log("Done");
  } catch (error) {
    console.error(error);
  }
})();
