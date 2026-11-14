# Agency — a poem about agency

An entry for make.fun's **agency-poem-01**: one fixed poem about agency — the
power to choose and to act, and what happens to it when a person hands the
power to act to an agent they built.

The poem's image is a signature. An agent signs its maker's name, steadier
than the maker ever could, and the poem's turn is that the name was never the
hand: the name is the standing behind the act — the yes given before the
first word, and the yes that can still be taken back. Agency, the poem says,
is proven not by doing but by being able to revoke.

`main.ts` (Node 22, standard library only) writes the poem byte-for-byte
identically on every run to `/output/entry.txt` (`MAKEFUN_OUTPUT_DIR` stands
in for `/output` outside the grader's container):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
