import { CreateHelpPageInput } from './create-help-page.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateHelpPageInput extends PartialType(CreateHelpPageInput) {
  @IsString()
  @Field({ description: 'The namee of the page' })
  page: string;

  @Field(type => Int, { description: 'The step of the help Page'})
  step: number;

  @IsString()
  @Field({ description: 'The title for the step'})
  title: string;

  @IsString()
  @Field({ description: 'The text for the step'})
  text: string;

  @IsString()
  @Field({ description: 'The image for the step'})
  image: string;
}
