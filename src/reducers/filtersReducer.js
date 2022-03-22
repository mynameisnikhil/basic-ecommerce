const initialState = {
  Mobile: {
    Brands: ["Mi", "Realme"],
    RAM: ["4 GB", "3 GB", "2 GB"],
    Storage: ["64 GB", "128 GB", "32 GB"],
    Size: [
      "16.51 cm (6.5 inch)",
      "15.8 cm (6.22 inch)",
      "15.49 cm (6.1 inch)",
      "13.84 cm (5.45 inch)",
      "16.0 cm (6.3 inch)"
    ],
    GPU: [
      "Adreno 610",
      "ARM Mali-G72 MP3 at 800MHz",
      "GE8320",
      "Adreno 505 at 650 MHz",
      "Adreno 505",
      "Adreno 512",
      "Adreno 612"
    ],
    Resolution: [
      "720 x 1600 Pixels",
      "1520 x 720 pixels",
      "1560 x 720 pixels",
      "1440 x 720 pixels",
      "2340 x 1080 pixels"
    ]
  },

  Laptop: {
    Brands: ["Apple", "Lenovo", "Dell"],
    RAM: ["8 GB", "4 GB"],
    RamType: ["DDR3"],
    SSD: ["Yes", "No"],
    SSDCapacity: ["128 GB"],
    BacklitKeyboard: ["Yes"],
    Touchscreen: ["No"],
    OperatingSystem: ["Mac OS Sierra", "Windows 10 Home", "DOS", "Ubuntu"],
    GraphicsProcessor: ["Intel Integrated HD 6000"],
    ProcessorBrand: ["Intel", "AMD"],
    ProcessorName: [
      "Core i5",
      "Core i3",
      "Ryzen 3 Dual Core",
      "APU Dual Core A6",
      "Core i7"
    ],
    HDDCapacity: ["1 TB"]
  }
};

export const filtersObject = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};
