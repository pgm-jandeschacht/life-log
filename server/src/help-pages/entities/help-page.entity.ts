import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class HelpPage {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The id of the help page' })
  id: number;

  @Column()
  @Field({ description: 'The namee of the page' })
  page: string;

  @Column()
  @Field(type => Int, { description: 'The step of the help Page'})
  step: number;

  @Column()
  @Field({ description: 'The title for the step'})
  title: string;

  @Column()
  @Field({ description: 'The text for the step'})
  text: string;

  @Column()
  @Field({ description: 'The image for the step'})
  image: string;
}
