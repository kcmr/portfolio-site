import React from "react"
import SidebarBlock from "../components/SidebarBlock"

export default () => (
  <React.Fragment>
    <h2>Self-Interview</h2>

    <SidebarBlock title="UI design or develop?">
      <p>Develop.</p>
    </SidebarBlock>
    <SidebarBlock title="Me in 3 years…">
      <p>
        3 years is a long time, but I hope to be a better and more experienced
        developer that can solve problems in simpler ways and take better
        decisions. In other words, I want to continue coding!
      </p>
    </SidebarBlock>
    <SidebarBlock title="Near goals">
      <p>
        I want to gain deeper knowledge about design patterns, refactoring
        techniques, clean coding, algorithms… Regarding to technologies, I want
        to learn more about Node and start using React.
      </p>
    </SidebarBlock>
    <SidebarBlock title="Learned lessons">
      <p>
        Everything changes, increases its complexity and even degrades over
        time, so it’s better to start things as simple as possible. Less is
        more.
      </p>
      <p>
        The use of a particular technology should not be a goal by itself but
        the medium to get the best result for a task.
      </p>
    </SidebarBlock>
  </React.Fragment>
)
