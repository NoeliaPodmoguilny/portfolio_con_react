

export const ItemsProjects = ({ projects }) => {

    return (
        <>
            {
                projects.map(({ nombre, descripcion, url }) => (
                    <div
                        key={nombre}
                        className="col-lg-4 col-md-6 mb-4 "
                    >
                        <div className="card bg-transparent cardProjects animate__animated animate__fadeIn">
                            <div className="card-body">
                                <h5 className="card-title title">{nombre}</h5>
                                <p className="card-text subtitle ">{descripcion}</p>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btnCV"
                                > Ver proyecto
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
