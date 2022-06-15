import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument } from './user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    const user = this.userModel.create(createUserDto)
    return user
  }

  findAll() {
    return this.userModel.find().exec()
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec()
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove(id).exec()
  }
}
