import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
:host {
  display: flex;
  background: var(--tfl-color-bg-fill);
  width: 100%;
  height: 100%;
  --primary-base: rgb(258, 87, 161);
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: var(--tfl-color-bg-fill);
  color: var(--tfl-color-on-bg-fill);
  padding: 0 var(--tfl-spacing-layout-lg);
}
`