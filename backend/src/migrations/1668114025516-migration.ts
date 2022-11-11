import { MigrationInterface, QueryRunner } from 'typeorm'

export class foo1668114025516 implements MigrationInterface {
  name = 'foo1668114025516'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`imagens\` (\`id_img\` varchar(36) NOT NULL, \`url\` varchar(255) NOT NULL, \`url_thumb\` varchar(255) NOT NULL, \`id_produto\` varchar(255) NOT NULL, PRIMARY KEY (\`id_img\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`produtos\` (\`id_produto\` varchar(36) NOT NULL, \`nome\` varchar(255) NOT NULL, \`preco\` double NOT NULL, \`id_categoria\` varchar(255) NOT NULL, \`disponivel\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id_produto\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`categorias\` (\`id_categoria\` varchar(36) NOT NULL, \`categoria\` varchar(255) NOT NULL, PRIMARY KEY (\`id_categoria\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `ALTER TABLE \`imagens\` ADD CONSTRAINT \`FK_15192456360ddc202a61920e3e4\` FOREIGN KEY (\`id_produto\`) REFERENCES \`produtos\`(\`id_produto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE \`produtos\` ADD CONSTRAINT \`FK_3f1e275d3eb47a219fcb9c8654b\` FOREIGN KEY (\`id_categoria\`) REFERENCES \`categorias\`(\`id_categoria\`) ON DELETE RESTRICT ON UPDATE RESTRICT`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`produtos\` DROP FOREIGN KEY \`FK_3f1e275d3eb47a219fcb9c8654b\``,
    )
    await queryRunner.query(
      `ALTER TABLE \`imagens\` DROP FOREIGN KEY \`FK_15192456360ddc202a61920e3e4\``,
    )
    await queryRunner.query(`DROP TABLE \`categorias\``)
    await queryRunner.query(`DROP TABLE \`produtos\``)
    await queryRunner.query(`DROP TABLE \`imagens\``)
  }
}
