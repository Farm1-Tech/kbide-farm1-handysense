#include <Arduino.h>
#include <HandySense.h>
${EXTINC}

${VARIABLE}

${FUNCTION}

void setup() {
  HandySenseSetup();

  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop() {
  HandySenseLoop();
}
