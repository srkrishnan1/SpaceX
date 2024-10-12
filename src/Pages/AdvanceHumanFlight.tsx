
import image from "../assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg";

const AdvanceHumanFlight = () => {
  return (
    <main className="advanceHuman">
      <section className="advanceHuman__container">
        <img
          className="advanceHuman__image"
          src={image}
          alt="Advance Human SpaceSuit Mission"
        />
        <p className="advanceHuman__caption">May 4, 2024</p>
        <h1 className="advanceHuman__title">
          THE EXTRAVEHICULAR ACTIVITY (EVA) SUIT
        </h1>
        <p className="advanceHuman__para">
          In February 2022, Jared Isaacman and SpaceX announced the Polaris
          Program, an effort designed to rapidly advance human spaceflight
          capabilities, while also supporting important causes here on Earth.
        </p>
        <p className="advanceHuman__para">
          Polaris Dawn, the first of the program’s three human spaceflight
          missions, is targeted to launch to orbit no earlier than summer 2024.
          During the five-day mission, the crew will perform SpaceX’s first-ever
          Extravehicular Activity (more commonly known as an EVA or spacewalk)
          from Dragon, which will also be the first-ever commercial astronaut
          spacewalk. This historic milestone will also be the first time four
          astronauts will be exposed to the vacuum of space at the same time.
        </p>
        <p className="advanceHuman__para">
          Supporting the crew throughout the spacewalk will be SpaceX’s
          newly-developed EVA suit, an evolution of the Intravehicular Activity
          (IVA) suit crews currently wear aboard Dragon human spaceflight
          missions. Developed with mobility in mind, SpaceX teams incorporated
          new materials, fabrication processes, and novel joint designs to
          provide greater flexibility to astronauts in pressurized scenarios
          while retaining comfort for unpressurized scenarios. The 3D-printed
          helmet incorporates a new visor to reduce glare during the EVA in
          addition to the new Heads-Up Display (HUD) and camera that provide
          information on the suit’s pressure, temperature, and relative
          humidity. The suit also incorporates enhancements for reliability and
          redundancy during a spacewalk, adding seals and pressure valves to
          help ensure the suit remains pressurized and the crew remains safe.
        </p>
        <p className="advanceHuman__para">
          All of these enhancements to the EVA suit are part of a scalable
          design, allowing teams to produce and scale to different body types as
          SpaceX seeks to create greater accessibility to space for all of
          humanity.
        </p>
        <p className="advanceHuman__para">
          While Polaris Dawn will be the first time the SpaceX EVA suit is used
          in low-Earth orbit, the suit’s ultimate destiny lies much farther from
          our home planet. Building a base on the Moon and a city on Mars will
          require the development of a scalable design for the millions of
          spacesuits required to help make life multiplanetary.
        </p>
      </section>
    </main>
  );
};

export default AdvanceHumanFlight;
