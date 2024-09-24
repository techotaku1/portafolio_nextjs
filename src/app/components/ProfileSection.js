import Image from "next/image";
import Link from "next/link";

const ProfileSection = () => (
  <div className="container d-flex align-items-center bg-dark text-white py-4 mb-4">
    <Image
      src="/mi-imagen2.jpg"
      alt="Foto de perfil"
      width={180}
      height={180}
      className="me-4 rounded"
      style={{ objectFit: "cover", height: "170px" }}
    />
    <div>
      <h1 className="h3 mb-1 fw-bold">Jose David Gonzalez</h1>
      <h2 className="h5">Programador FULL STACK</h2>
      <p className="mt-2">
        Soy un apasionado desarrollador con experiencia en tecnologías frontend
        y backend. Me especializo en React, Next.js y Python para crear
        aplicaciones modernas y eficientes.
      </p>
      <Link href="/hireme" className="btn btn-outline-light mt-2">
        Contratarme
      </Link>
    </div>
  </div>
);
export default ProfileSection;
