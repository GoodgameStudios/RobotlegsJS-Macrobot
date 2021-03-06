// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { ICommand } from "robotlegs";

import { ISubCommandMapper } from "../dsl/ISubCommandMapper";
import { ISubCommandUnMapper } from "../dsl/ISubCommandUnMapper";

export interface IMacro extends ICommand, ISubCommandMapper, ISubCommandUnMapper {
    prepare(): void;
}
