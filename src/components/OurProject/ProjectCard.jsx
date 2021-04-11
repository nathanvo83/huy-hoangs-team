import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

// const extra = (
// <a
//   href={project.link}
//   rel="noopener noreferrer"
// >
//   <div class="img-box">
//     <img
//       src={project.image}
//       alt={project.name}
//     />

//     <div class="transparent-box">
//       <div class="caption">
//         <p>{project.name}</p>
//         <p class="opacity-low">{project.address}</p>
//       </div>
//     </div>
//   </div>
// </a>
// )
class ProjectCard extends React.Component {
  componentDidMount() {
    this.magnificPopup(this.props);
  }

  magnificPopup(project) {
    window.$(`#${project.id}`).magnificPopup({
      type: 'image',
      items: project.images.map(img => ({
        src: img,
      })),
      gallery: {
        enabled: true,
      },
    })
  }

  render() {
    const props = this.props;

    return (<div className="our-products-card">
      <div className="ui card">
        <div className="image">
          <img src={props.image} style={{ height:'300px' }} />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta"><span className="date">{props.address}</span></div>
          {/* <div className="description">{props.address}</div> */}
        </div>
        <div className="extra">
          <a id={props.id}
            onClick={() => this.magnificPopup(props)}>
            <i aria-hidden="true" className="image icon"></i>{props.images.length} Photos
          </a>
        </div>
      </div>
    </div>)
  }
}

export default ProjectCard
