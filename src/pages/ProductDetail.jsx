
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del producto</h2>
      <p>Producto con ID: {id}</p>
    </div>
  );
}
