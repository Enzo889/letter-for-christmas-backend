import { CreateCartDto } from './create-cart.dto';

// export class UpdateCartDto extends PartialType(CreateCartDto) {}
export type UpdateCartDto = Partial<CreateCartDto>;
