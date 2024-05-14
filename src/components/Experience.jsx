import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <meshNormalMaterial />
        <boxGeometry />
      </mesh>
    </>
  );
};
