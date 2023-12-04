import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import nextLogo from "../nextjslogo.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  }
});

function PDF() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello world</Text>
        <View style={styles.section}>
          <Image src={nextLogo} />
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            ad, rem iste similique voluptatem totam earum minima veritatis porro
            illum alias quasi maxime labore voluptatibus reiciendis ipsa,
            sapiente velit, facere quibusdam doloremque impedit expedita
            laudantium. Fugiat quod reprehenderit a vero, non in reiciendis iure
            doloribus id ipsa recusandae tempore, blanditiis quia totam
            temporibus voluptatum? Dolorem, repellat ducimus tenetur expedita
            natus deleniti quaerat magni itaque beatae animi nemo dolorum, modi
            accusantium cumque atque rerum nobis sit dolor non quae, quibusdam
            aliquam dolores delectus? Ipsam in perspiciatis id, temporibus dicta
            odio corporis adipisci, distinctio inventore dolor fugiat modi eos
            sint unde culpa.
          </Text>
        </View>
        <Text style={styles.parragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam explicabo quam officiis illo optio eum distinctio nihil in quidem delectus ex expedita voluptatibus. Est nobis ex beatae doloribus illum, autem maiores pariatur ea sed soluta nesciunt debitis corporis. Soluta, quis dolor deleniti quibusdam iste eveniet aliquid minus dolorem, molestias natus quam quo labore repellendus! Saepe magni doloribus suscipit quas consectetur velit facere dolorem culpa? Eveniet nihil quo accusamus. Numquam vero quos nobis veniam sequi, nihil earum voluptatibus aliquam id tempora non suscipit beatae, quo distinctio totam repellendus recusandae optio ex? Qui maxime veritatis quaerat esse nam repellendus sed, tempora, illum aliquam dolorum praesentium soluta excepturi fuga, minus consequatur suscipit. Cumque odio sapiente molestiae non, fugit culpa dolore aspernatur ea placeat suscipit reprehenderit rerum quia, fugiat ex, sequi sunt autem totam eius delectus! Eos beatae incidunt, recusandae rem possimus repellat architecto ipsa obcaecati reprehenderit quia magni dignissimos quae? Excepturi, sed culpa quo autem ipsum nobis hic recusandae modi facere optio provident odit corporis tempora voluptatum facilis earum qui laboriosam? Quisquam blanditiis consequuntur nam! Reprehenderit explicabo illo, mollitia non cumque sunt sapiente aut esse laborum quis excepturi saepe architecto ipsum repudiandae quasi beatae necessitatibus neque facere laboriosam fugit? Officia, illo officiis!
        </Text>
        <Text style={styles.parragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veritatis ea corrupti voluptatibus ratione? Eaque provident blanditiis nemo dolores tenetur facere maxime vitae. Aliquam sunt doloremque, ducimus amet, non deleniti perferendis voluptate fugit maiores maxime sit magnam ab soluta cum esse quod, neque aspernatur? Ut in dolores quia minima, voluptates esse tempora itaque doloremque expedita cumque maiores! Magnam amet non porro a voluptatem laborum soluta atque aspernatur veniam unde, iusto debitis et maxime possimus sequi ex quod perferendis voluptate repudiandae itaque mollitia quasi sit. Quibusdam mollitia enim nemo velit dolore quas molestias ratione sapiente reprehenderit, eos voluptates hic rem impedit, aspernatur atque incidunt. Sed, esse odit voluptates enim impedit ad culpa reprehenderit veniam aliquid voluptate repellat tempora. Ipsum mollitia doloremque ducimus accusantium debitis a maxime, quaerat laudantium aliquid earum consequuntur animi hic nisi similique deleniti praesentium harum sequi commodi facere reiciendis illo temporibus officiis amet! Hic libero animi facilis reprehenderit veritatis? Ab minus consectetur enim corporis deserunt consequatur adipisci sit eligendi fuga voluptatum reiciendis, natus pariatur sapiente praesentium omnis beatae cupiditate dolores nesciunt est distinctio facilis quaerat temporibus similique nisi. Veniam cum totam iusto, dignissimos voluptatem, aut recusandae tempore unde, praesentium officiis ipsa ad commodi nulla quasi repellat eveniet voluptate.
        </Text>

        <Text style={styles.parragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veritatis ea corrupti voluptatibus ratione? Eaque provident blanditiis nemo dolores tenetur facere maxime vitae. Aliquam sunt doloremque, ducimus amet, non deleniti perferendis voluptate fugit maiores maxime sit magnam ab soluta cum esse quod, neque aspernatur? Ut in dolores quia minima, voluptates esse tempora itaque doloremque expedita cumque maiores! Magnam amet non porro a voluptatem laborum soluta atque aspernatur veniam unde, iusto debitis et maxime possimus sequi ex quod perferendis voluptate repudiandae itaque mollitia quasi sit. Quibusdam mollitia enim nemo velit dolore quas molestias ratione sapiente reprehenderit, eos voluptates hic rem impedit, aspernatur atque incidunt. Sed, esse odit voluptates enim impedit ad culpa reprehenderit veniam aliquid voluptate repellat tempora. Ipsum mollitia doloremque ducimus accusantium debitis a maxime, quaerat laudantium aliquid earum consequuntur animi hic nisi similique deleniti praesentium harum sequi commodi facere reiciendis illo temporibus officiis amet! Hic libero animi facilis reprehenderit veritatis? Ab minus consectetur enim corporis deserunt consequatur adipisci sit eligendi fuga voluptatum reiciendis, natus pariatur sapiente praesentium omnis beatae cupiditate dolores nesciunt est distinctio facilis quaerat temporibus similique nisi. Veniam cum totam iusto, dignissimos voluptatem, aut recusandae tempore unde, praesentium officiis ipsa ad commodi nulla quasi repellat eveniet voluptate.
        </Text>

        <View style={styles.pageNumber}>
            <Text render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
