import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
.newcollectible-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
}

.newcollectible-view > .form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
}

.newcollectible-view > .form > .form-entry {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .2rem;
}

.newcollectible-view > .form > .form-entry > label, input, textarea {
  font-family: var(--tfl-font-family-body-sans);
}

.newcollectible-view > .form > .form-entry > label {
  font-family: var(--tfl-font-family-heading-sans);
}
`