

export const Image = () => {
    return (
        // <div className="col-md-6 img-fluid d-none d-lg-block">
        //     <img
        //         src="/assets/pic.png"
        //         alt="Foto de Noelia"
        //         className="photo"
        //     />
        // </div>
        <div class="container">
            <div class="d-none d-lg-block">
                <img src="/assets/pic.png" alt="Imagen de Noelia hecha con IA" class="img-fluid photo"/>
            </div>
            <div class="d-lg-none fs3 lightColor text-center">
                <p>Noelia Podmoguilny</p>
            </div>
        </div>
    )
}
