'use client';

import React, { useState } from 'react';
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react';
import { HeartIcon } from '@/assets/HeartIcon';
import { PauseCircleIcon } from '@/assets/PauseCircleIcon';
import { NextIcon } from '@/assets/NextIcon';
import { PreviousIcon } from '@/assets/PreviousIcon';
import { RepeatOneIcon } from '@/assets/RepeatOneIcon';
import { ShuffleIcon } from '@/assets/ShuffleIcon';
import playlistIcon from '@/assets/music.svg';

export default function Player() {
  const [liked, setLiked] = useState(false);

  return (
    <footer className={`flex h-28 justify-center`}>
      <Card isBlurred className='h-full max-w-[610px] border-none'>
        <CardBody className='h-full w-full'>
          <div className='flex flex-row'>
            <div className='relative col-span-6 md:col-span-4'>
              <Image
                src={playlistIcon}
                alt='Album cover'
                className='object-cover'
                height={200}
                shadow='md'
                width='100%'
              />
            </div>

            <div className='col-span-6 flex flex-col md:col-span-8'>
              <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-0'>
                  <h3 className='font-semibold text-foreground/90'>
                    Daily Mix
                  </h3>
                  <p className='text-small text-foreground/80'>12 Tracks</p>
                  <h1 className='mt-2 text-large font-medium'>
                    Frontend Radio
                  </h1>
                </div>
                <Button
                  isIconOnly
                  className='-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                  onPress={() => setLiked((v) => !v)}
                >
                  <HeartIcon
                    className={liked ? '[&>path]:stroke-transparent' : ''}
                    fill={liked ? 'currentColor' : 'none'}
                  />
                </Button>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <Slider
                  aria-label='Music progress'
                  classNames={{
                    track: 'bg-default-500/30',
                    thumb: 'w-2 h-2 after:w-2 after:h-2 after:bg-foreground',
                  }}
                  color='foreground'
                  defaultValue={33}
                  size='sm'
                />
                <div className='flex justify-between'>
                  <p className='text-small'>1:23</p>
                  <p className='text-small text-foreground/50'>4:32</p>
                </div>
              </div>

              <div className='flex w-full items-center justify-center'>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <RepeatOneIcon className='text-foreground/80' />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <PreviousIcon />
                </Button>
                <Button
                  isIconOnly
                  className='h-auto w-auto data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <PauseCircleIcon size={54} />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <NextIcon />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <ShuffleIcon className='text-foreground/80' />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* <Card
        isBlurred
        className='max-w-[610px] border-none bg-background/60 dark:bg-default-100/50'
        shadow='sm'
      >
        <CardBody>
          <div className='grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4'>
            <div className='relative col-span-6 md:col-span-4'>
              <Image
                alt='Album cover'
                className='object-cover'
                height={200}
                shadow='md'
                src='/images/album-cover.png'
                width='100%'
              />
            </div>

            <div className='col-span-6 flex flex-col md:col-span-8'>
              <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-0'>
                  <h3 className='font-semibold text-foreground/90'>
                    Daily Mix
                  </h3>
                  <p className='text-small text-foreground/80'>12 Tracks</p>
                  <h1 className='mt-2 text-large font-medium'>
                    Frontend Radio
                  </h1>
                </div>
                <Button
                  isIconOnly
                  className='-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                  onPress={() => setLiked((v) => !v)}
                >
                  <HeartIcon
                    className={liked ? '[&>path]:stroke-transparent' : ''}
                    fill={liked ? 'currentColor' : 'none'}
                  />
                </Button>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <Slider
                  aria-label='Music progress'
                  classNames={{
                    track: 'bg-default-500/30',
                    thumb: 'w-2 h-2 after:w-2 after:h-2 after:bg-foreground',
                  }}
                  color='foreground'
                  defaultValue={33}
                  size='sm'
                />
                <div className='flex justify-between'>
                  <p className='text-small'>1:23</p>
                  <p className='text-small text-foreground/50'>4:32</p>
                </div>
              </div>

              <div className='flex w-full items-center justify-center'>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <RepeatOneIcon className='text-foreground/80' />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <PreviousIcon />
                </Button>
                <Button
                  isIconOnly
                  className='h-auto w-auto data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <PauseCircleIcon size={54} />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <NextIcon />
                </Button>
                <Button
                  isIconOnly
                  className='data-[hover]:bg-foreground/10'
                  radius='full'
                  variant='light'
                >
                  <ShuffleIcon className='text-foreground/80' />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card> */}
    </footer>
  );
}
