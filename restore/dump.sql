/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS picinguaba;
USE picinguaba;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: categorias
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` varchar(36) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: imagens
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `imagens` (
  `id_img` varchar(36) NOT NULL,
  `url` varchar(255) NOT NULL,
  `url_thumb` varchar(255) NOT NULL,
  `id_produto` varchar(255) NOT NULL,
  PRIMARY KEY (`id_img`),
  KEY `FK_15192456360ddc202a61920e3e4` (`id_produto`),
  CONSTRAINT `FK_15192456360ddc202a61920e3e4` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: produtos
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` varchar(36) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` double NOT NULL,
  `id_categoria` varchar(255) NOT NULL,
  `disponivel` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_produto`),
  KEY `FK_3f1e275d3eb47a219fcb9c8654b` (`id_categoria`),
  CONSTRAINT `FK_3f1e275d3eb47a219fcb9c8654b` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: categorias
# ------------------------------------------------------------

INSERT INTO
  `categorias` (`id_categoria`, `categoria`)
VALUES
  ('5cd896b7-f00d-4772-afaa-16f3715d1709', 'Eventos');
INSERT INTO
  `categorias` (`id_categoria`, `categoria`)
VALUES
  (
    'c57fe202-62da-47f4-90b0-e963c324314a',
    'Acomodação'
  );
INSERT INTO
  `categorias` (`id_categoria`, `categoria`)
VALUES
  (
    'f04096ea-4beb-4d57-a3b2-4b61fab54cd6',
    'Roteiros'
  );
INSERT INTO
  `categorias` (`id_categoria`, `categoria`)
VALUES
  (
    'fc3ef946-1777-4b44-8e9d-025fb024827d',
    'Alimentação'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: imagens
# ------------------------------------------------------------

INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '1bc77a39-83db-49d1-a01b-ae7f11d0d331',
    'https://i.postimg.cc/wjwLtPMy/14.jpg',
    'https://i.postimg.cc/gkhxm6nm/house-3.png',
    '98756791-8574-4a9a-97d4-16cd2b665c4d'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '2a4c2e1b-d70d-47c8-847d-6e40936bdf9c',
    'https://i.postimg.cc/s22Pwzq4/08.jpg',
    'https://i.postimg.cc/1XvbnnR6/pousada-1.jpg',
    '2327918a-748d-4a9b-af77-3807500589d6'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '36f7c85c-6c10-46c9-ae71-2c425871d84d',
    'https://i.postimg.cc/X7MCmHnR/15.jpg',
    'https://i.postimg.cc/Wb1Z6L37/house-4.png',
    '8a031253-8221-47b0-b2a9-2ff913a4e463'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '4695229d-98dc-46e0-b093-935d1ba67065',
    'https://i.postimg.cc/4nCN0StB/07.jpg',
    'https://i.postimg.cc/X7KQcZHx/roteiro-4.png',
    'de43ca83-b2b6-4f3e-8940-45463efef511'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '5250d821-8fa7-406d-b9bb-6eaac644d90c',
    'https://i.postimg.cc/X70wtdtJ/13.jpg',
    'https://i.postimg.cc/bNh691XB/house-2.png',
    '657f5867-206f-420b-84ca-e11bc3880367'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '534a8ccc-9802-41d5-89d7-f948c40b7a9a',
    'https://i.postimg.cc/J0HzPLys/06.jpg',
    'https://i.postimg.cc/Gpm7pcjK/roteiro-3.png',
    '643deb62-ee33-4cad-b7d4-08130c2ef173'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '5d8bb858-f20b-4d35-9115-8cca2a38541e',
    'https://i.postimg.cc/3wL1TNmq/01.jpg',
    'https://i.postimg.cc/nhf3T76W/event-1.png',
    '4ea42108-19c5-41d2-b1f0-f2d4038c613c'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '64bbc764-ffea-42bb-a6f0-2d6a8ea63ba1',
    'https://i.postimg.cc/zBsnzgBx/12.jpg',
    'https://i.postimg.cc/T3qqNv2r/house-1.png',
    'c831d1ac-df47-4e3b-acf9-bb765627f518'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    '9df82c23-7f73-4a14-9c37-36d28d34fe69',
    'https://i.postimg.cc/CxGd3ScD/04.jpg',
    'https://i.postimg.cc/YSdPN4ST/roteiro-1.png',
    '548a9fb0-91d6-456e-aedc-412486684b89'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'ad28b98c-2dc4-490a-990f-881054b1e58d',
    'https://i.postimg.cc/15pKzJDw/03.jpg',
    'https://i.postimg.cc/9MTMPrsc/event-3.png',
    '5638bcab-3e88-46b3-8e5e-1bca394e093d'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'c8e765d9-74ca-431e-b56e-6841e4f39247',
    'https://i.postimg.cc/s21xv7VP/10.jpg',
    'https://i.postimg.cc/RZ62hZk6/pousada-3.jpg',
    '62a62e4b-e098-4acd-8a17-7ffc89464baa'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'c995f2ad-de16-4ce6-b9a8-cd2d882e58e9',
    'https://i.postimg.cc/Kzzz3Lxr/05.jpg',
    'https://i.postimg.cc/VLXHGZ6q/roteiro-2.png',
    '20f8da2f-fac4-4c5f-892c-8a01de57db03'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'cdec044b-c9de-4673-a371-ade01b1a8b6e',
    'https://i.postimg.cc/wvZk1rWc/02.jpg',
    'https://i.postimg.cc/vZ73KTyZ/event-2.png',
    '347ca59b-4bd4-439d-beef-9d5d65a2c66a'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'd4c419d3-4ec4-490c-ae1e-6f27a271a62c',
    'https://i.postimg.cc/L5V2y896/11.jpg',
    'https://i.postimg.cc/GmWVy1RM/pousada-4.jpg',
    'f7159ede-16c8-42ac-8008-737416ebadfc'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'f52f46de-2979-45a6-97a9-22fb6ee249cc',
    'https://i.postimg.cc/6Q1rPSNJ/09.jpg',
    'https://i.postimg.cc/dt0bMBn9/pousada-2.jpg',
    '9a90c079-657d-4f4f-978c-13c0828dc7e5'
  );
INSERT INTO
  `imagens` (`id_img`, `url`, `url_thumb`, `id_produto`)
VALUES
  (
    'fac7e10f-a76f-41c7-8f33-4e00f235b305',
    'https://i.postimg.cc/ydYPJfDQ/16.jpg',
    'https://i.postimg.cc/zGCSxmW2/event-4.png',
    'b583638d-3067-4a62-ab7f-891d68ba05a7'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: produtos
# ------------------------------------------------------------

INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '20f8da2f-fac4-4c5f-892c-8a01de57db03',
    'ilha das couves',
    0,
    'f04096ea-4beb-4d57-a3b2-4b61fab54cd6',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '2327918a-748d-4a9b-af77-3807500589d6',
    'Petiscos Beira Mar',
    0,
    'fc3ef946-1777-4b44-8e9d-025fb024827d',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '347ca59b-4bd4-439d-beef-9d5d65a2c66a',
    'Festa do Branco',
    0,
    '5cd896b7-f00d-4772-afaa-16f3715d1709',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '4ea42108-19c5-41d2-b1f0-f2d4038c613c',
    'Corrida de Canoa',
    0,
    '5cd896b7-f00d-4772-afaa-16f3715d1709',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '548a9fb0-91d6-456e-aedc-412486684b89',
    'Esporte Náutico',
    0,
    'f04096ea-4beb-4d57-a3b2-4b61fab54cd6',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '5638bcab-3e88-46b3-8e5e-1bca394e093d',
    'Festival do Camarão',
    0,
    '5cd896b7-f00d-4772-afaa-16f3715d1709',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '62a62e4b-e098-4acd-8a17-7ffc89464baa',
    'PicimBar',
    0,
    'fc3ef946-1777-4b44-8e9d-025fb024827d',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '643deb62-ee33-4cad-b7d4-08130c2ef173',
    'Praia da FAZENDA',
    0,
    'f04096ea-4beb-4d57-a3b2-4b61fab54cd6',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '657f5867-206f-420b-84ca-e11bc3880367',
    'Casa Verde',
    0,
    'c57fe202-62da-47f4-90b0-e963c324314a',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '8a031253-8221-47b0-b2a9-2ff913a4e463',
    'Hotel Velinn Caravela',
    0,
    'c57fe202-62da-47f4-90b0-e963c324314a',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '98756791-8574-4a9a-97d4-16cd2b665c4d',
    'Chales Four Seasons',
    0,
    'c57fe202-62da-47f4-90b0-e963c324314a',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    '9a90c079-657d-4f4f-978c-13c0828dc7e5',
    'Sobre as Ondas',
    0,
    'fc3ef946-1777-4b44-8e9d-025fb024827d',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    'b583638d-3067-4a62-ab7f-891d68ba05a7',
    'Festival Picinguaba',
    0,
    '5cd896b7-f00d-4772-afaa-16f3715d1709',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    'c831d1ac-df47-4e3b-acf9-bb765627f518',
    'Pousada Picinguba',
    0,
    'c57fe202-62da-47f4-90b0-e963c324314a',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    'de43ca83-b2b6-4f3e-8940-45463efef511',
    'Praia da almada',
    0,
    'f04096ea-4beb-4d57-a3b2-4b61fab54cd6',
    0
  );
INSERT INTO
  `produtos` (
    `id_produto`,
    `nome`,
    `preco`,
    `id_categoria`,
    `disponivel`
  )
VALUES
  (
    'f7159ede-16c8-42ac-8008-737416ebadfc',
    'Deck da Villa',
    0,
    'fc3ef946-1777-4b44-8e9d-025fb024827d',
    0
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
