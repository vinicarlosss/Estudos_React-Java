import { Footer, Header, MapScreen } from '../../index';
import './findPlace.style.css';

export function FindPlace() {
  return (
    <>
      <main className="findPlace-main">
        <Header />
        <section className="map">
          <MapScreen />
          <Footer />
        </section>
      </main>
    </>
  );
}
