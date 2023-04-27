import textImg from "../assets/img/image-1.jpg";
import backgroundImg from "../assets/img/image-2.jpg";

export const Messages = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={textImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odio,
          expedita impedit, nisi sapiente unde quasi debitis velit repudiandae
          fugit quos officia reiciendis, optio aliquid harum exercitationem
          voluptatum distinctio alias!
        </div>
      </div>
      <div className="row">
        <div
          className="col-xl-6 offset-6"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
          perspiciatis harum id neque quaerat? Eos eum porro doloremque ducimus
          veniam corrupti quam, velit dignissimos quos saepe in, repellat
          explicabo? Unde dicta magni, incidunt quis eum explicabo voluptas
          totam magnam possimus nam consequuntur consequatur accusantium animi
          beatae sit amet impedit repudiandae aspernatur itaque nobis
          perferendis iusto dolore nulla! Eligendi, excepturi. Animi enim at
          expedita vel aut assumenda amet cumque! Cupiditate animi cumque
          accusamus illo ab tempore aliquam! Excepturi adipisci assumenda
          blanditiis vitae harum esse quidem!
        </div>
      </div>
    </>
  );
};
